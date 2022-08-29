import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { KafkaClientService } from '@core/kafka-client/kafka-client.service';
import { Consumer } from 'kafkajs';
import { AppConfigService } from '@core/app-config';
import { getErrorMessage } from '@src/shared/utils';
import { LogDto } from '@features/kafka-producer/dtos/log.dto';
import { LogsService } from '@features/logs/logs.service';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
    private readonly logger = new Logger(KafkaConsumerService.name);
    private consumer: Consumer = null;

    constructor(
        private readonly kafkaClientService: KafkaClientService,
        private readonly config: AppConfigService,
        private readonly logsService: LogsService,
    ) {}

    async onModuleInit(): Promise<void> {
        try {
            const kafkaConfigConsumer = this.config.get('KAFKA')?.consumer;
            const topic = kafkaConfigConsumer?.topic;
            const groupId = kafkaConfigConsumer?.groupId;

            await this.connectToConsumer(topic, groupId, kafkaConfigConsumer?.fromBeginning);
            await this.consumeMessage();
        } catch (err) {
            this.logger.error(`KafkaConsumerService | onModuleInit | error - ${getErrorMessage(err)}`);
        }
    }

    async connectToConsumer(topic: string, groupId: string, fromBeginning: boolean) {
        try {
            this.logger.log(
                `KafkaConsumerService | connectToConsumer |  kafka consumer is trying to connect to topics: ${topic} as groupId: ${groupId}`,
            );

            this.consumer = this.kafkaClientService.getClient().consumer({
                groupId,
            });

            await this.consumer.connect();
            await this.consumer.subscribe({
                topic,
                fromBeginning,
            });
            this.logger.log(
                `KafkaConsumerService | connectToConsumer | kafka consumer is connected to topics: ${topic} as groupId: ${groupId}`,
            );
        } catch (err) {
            this.logger.error(
                `KafkaConsumerService | connectToConsumer | kafka consumer can't connect to topic: ${topic} - error - ${getErrorMessage(
                    err,
                )}`,
            );
        }
    }

    consumeMessage = async () => {
        await this.consumer.run({
            eachMessage: async ({ topic, message, partition }) => {
                try {
                    this.logger.log(`KafkaConsumerService | consumeMessage | start`);

                    const data = JSON.parse(message?.value.toString()) as unknown as LogDto;
                    this.logger.log(
                        `KafkaConsumerService | consumeMessage |  end - new message received from topics: ${topic}, from partition: ${partition}, message: ${JSON.stringify(
                            data,
                            null,
                            4,
                        )}`,
                    );
                    this.logsService
                        .saveLog(data)
                        .catch((error) =>
                            this.logger.error(
                                `KafkaConsumerService | consumeMessage | error when save log via logsService - ${getErrorMessage(error)}`,
                            ),
                        );
                } catch (err) {
                    this.logger.warn(
                        `KafkaConsumerService | consumeMessage | error when new message received from topics: ${topic}, from partition: ${partition}, error: ${getErrorMessage(
                            err,
                        )}`,
                    );
                }
            },
        });
    };
}
