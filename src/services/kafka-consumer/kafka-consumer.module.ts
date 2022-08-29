import { Module } from '@nestjs/common';
import { KafkaClientModule } from '@core/kafka-client/kafka-client.module';
import { KafkaProducerModule } from '@features/kafka-producer/kafka-producer.module';
import { KafkaConsumerService } from '@services/kafka-consumer/kafka-consumer.service';
import { LogsModule } from '@features/logs/logs.module';

@Module({
    imports: [KafkaClientModule.registerAsync(), KafkaProducerModule, LogsModule],
    providers: [KafkaConsumerService],
    exports: [KafkaConsumerService],
})
export class KafkaConsumerModule {}
