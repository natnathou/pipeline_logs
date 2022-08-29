import { Module } from '@nestjs/common';
import { LogsController } from '@features/logs/logs.controller';
import { LogsService } from '@features/logs/logs.service';
import { DbModule } from '@services/db/db.module';
import { LogProvider } from '@features/logs/log.provider';

@Module({
    imports: [DbModule],
    controllers: [LogsController],
    providers: [LogsService, LogProvider],
    exports: [LogsService],
})
export class LogsModule {}
