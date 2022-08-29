import { IsObject, IsOptional, IsString } from 'class-validator';

export class LogDto {
    @IsString()
    functionName: string;

    @IsString()
    message: string;

    @IsObject()
    @IsOptional()
    payload?: { [key: string]: any };
}
