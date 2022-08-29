import { DynamicModule, FactoryProvider, Module } from '@nestjs/common';
import { KafkaClientService } from '@core/kafka-client/kafka-client.service';
import { KAFKA_CLIENT_REGISTRATION } from '@core/kafka-client/constant';

export const KafkaClientRegistration: FactoryProvider = {
    provide: KAFKA_CLIENT_REGISTRATION,
    useFactory: (kafkaClientService: KafkaClientService) => {
        return kafkaClientService.register();
    },
    inject: [KafkaClientService],
};

@Module({})
export class KafkaClientModule {
    static registerAsync(): DynamicModule {
        return {
            module: KafkaClientModule,
            providers: [KafkaClientService, KafkaClientRegistration],
            exports: [KafkaClientService],
        };
    }
}
