import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Producer, RecordMetadata } from 'kafkajs';
import { KafkaClientService } from '@src/core/kafka-client/kafka-client.service';
import { AppConfigService } from '@core/app-config';
import { v4 as uuidv4 } from 'uuid';
import { getErrorMessage, handlerGeneralException } from '@src/shared/utils';
import { SendLogRequestDto } from '@features/kafka-producer/dtos/send-log-request.dto';

@Injectable()
export class KafkaProducerService implements OnModuleInit {
    private readonly logger = new Logger(KafkaProducerService.name);
    private producer: Producer;

    constructor(private readonly kafkaClientService: KafkaClientService, private readonly config: AppConfigService) {}

    async onModuleInit(): Promise<void> {
        try {
            await this.connect();
        } catch (err) {
            this.logger.error(`KafkaProducerService | onModuleInit | error - ${getErrorMessage(err)}`);
        }
    }

    private async connect() {
        try {
            this.logger.log(`KafkaProducerService | connect | kafka producer is trying to connect`);
            this.producer = this.kafkaClientService.getClient().producer();
            await this.producer.connect();
            this.logger.log(`KafkaProducerService | connect | kafka producer is connected`);
        } catch (err) {
            this.logger.error(`KafkaProducerService | connect | kafka producer can't connect - error - ${getErrorMessage(err)}`);
        }
    }

    async send(data: SendLogRequestDto): Promise<RecordMetadata[]> {
        try {
            const topic = this.config.get('KAFKA')?.producer?.topic;
            const key = data.key ? data.key : uuidv4();
            delete data.key;

            this.logger.log(
                `KafkaProducerService | send | start - send message to the the topic: ${topic} - key: ${key} - message: ${JSON.stringify(
                    data,
                )}`,
            );

            const response = await this.producer.send({
                topic: topic,
                messages: [{ key, value: JSON.stringify(data) }],
            });
            this.logger.log(
                `KafkaProducerService | send | end - send message to the the topic: ${topic} - key: ${key} - message: ${JSON.stringify(
                    data,
                )}`,
            );
            return response;
        } catch (err) {
            const topic = this.config.get('KAFKA')?.producer?.topic;

            this.logger.error(
                `KafkaProducerService | send | error - send message to the the topic: ${topic} - message: ${JSON.stringify(
                    data,
                )} - error: ${getErrorMessage(err)}`,
            );
            handlerGeneralException(err);
        }
    }
}
