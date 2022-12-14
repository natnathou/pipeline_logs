import { Body, Controller, Post } from '@nestjs/common';
import { KafkaProducerService } from '@features/kafka-producer/kafka-producer.service';
import { SendLogRequestDto } from '@features/kafka-producer/dtos/send-log-request.dto';

@Controller('producer')
export class KafkaProducerController {
    constructor(private readonly kafkaProducerService: KafkaProducerService) {}

    @Post()
    send(@Body() body: SendLogRequestDto): Promise<any> {
        return this.kafkaProducerService.send(body);
    }
}
