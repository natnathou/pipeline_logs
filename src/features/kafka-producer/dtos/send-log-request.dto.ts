import { LogDto } from '@features/kafka-producer/dtos/log.dto';
import { IsString } from 'class-validator';

export class SendLogRequestDto extends LogDto {
    @IsString()
    key: string;
}
