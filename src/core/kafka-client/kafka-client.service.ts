import { Injectable, Logger } from '@nestjs/common';
import { Admin, Kafka } from 'kafkajs';
import { AppConfigService } from '@core/app-config';

@Injectable()
export class KafkaClientService {
    private client: Kafka;
    private readonly logger = new Logger(KafkaClientService.name);

    constructor(private readonly config: AppConfigService) {}

    register(): void {
        const kafkaConfigClient = this.config.get('KAFKA')?.client;
        this.client = new Kafka({
            clientId: kafkaConfigClient?.clientId,
            brokers: kafkaConfigClient?.brokersList,
        });
        this.logger.log(`KafkaClientService is registered, for brokers: ${kafkaConfigClient?.brokersList?.join(', ')}`);
    }

    getClient(): Kafka {
        return this.client;
    }

    getAdmin(): Admin {
        return this.client.admin();
    }
}
