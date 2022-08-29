import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Producer, RecordMetadata } from 'kafkajs';
import { KafkaClientService } from '@src/core/kafka-client/kafka-client.service';
import { AppConfigService } from '@core/app-config';
import { v4 as uuidv4 } from 'uuid';
import { getErrorMessage } from '@src/shared/utils';
import { LogDto } from '@features/kafka-producer/dtos/log.dto';

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

    async send(data: LogDto): Promise<RecordMetadata[]> {
        try {
            const topic = this.config.get('KAFKA')?.producer?.topic;
            this.logger.log(
                `KafkaProducerService | send | start - send message to the the topic: ${topic} - message: ${JSON.stringify(data)}`,
            );

            const response = await this.producer.send({
                topic: topic,
                messages: [{ key: uuidv4(), value: JSON.stringify(data) }],
            });
            this.logger.log(
                `KafkaProducerService | send | end - send message to the the topic: ${topic} - message: ${JSON.stringify(data)}`,
            );
            return response;
        } catch (err) {
            const topic = this.config.get('KAFKA')?.producer?.topic;

            this.logger.error(
                `KafkaProducerService | send | error - send message to the the topic: ${topic} - error: ${getErrorMessage(err)}`,
            );
            throw err;
        }
    }
}
