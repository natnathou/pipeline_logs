import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaClientModule } from '@core/kafka-client/kafka-client.module';
import { KafkaProducerModule } from '@features/kafka-producer/kafka-producer.module';
import { AppConfigModule } from '@core/app-config';
import { KafkaConsumerModule } from '@services/kafka-consumer/kafka-consumer.module';
import {APP_INTERCEPTOR, APP_PIPE} from '@nestjs/core';
import { LogsModule } from '@features/logs/logs.module';
import {TimeoutInterceptor} from "@core/interceptors/timeout.interceptor";
import {TimeExecutionInterceptor} from "@core/interceptors/time-execution.interceptor";

@Module({
    imports: [KafkaClientModule, KafkaProducerModule, AppConfigModule, KafkaConsumerModule, LogsModule],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_PIPE,
            useValue: new ValidationPipe({ whitelist: true }),
        },
        { provide: APP_INTERCEPTOR, useClass: TimeExecutionInterceptor },
        { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },
    ],
})
export class AppModule {}
