import { LogDto } from '@features/kafka-producer/dtos/log.dto';
import { IsOptional, IsString } from 'class-validator';

export class SendLogRequestDto extends LogDto {
    @IsString()
    @IsOptional()
    key: string;
}
