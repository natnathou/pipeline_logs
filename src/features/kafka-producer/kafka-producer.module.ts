import { Module } from '@nestjs/common';
import { KafkaProducerController } from '@features/kafka-producer/kafka-producer.controller';
import { KafkaClientModule } from '@src/core/kafka-client/kafka-client.module';
import { KafkaProducerService } from '@features/kafka-producer/kafka-producer.service';

@Module({
    imports: [KafkaClientModule.registerAsync()],
    controllers: [KafkaProducerController],
    providers: [KafkaProducerService],
    exports: [KafkaProducerService],
})
export class KafkaProducerModule {}
