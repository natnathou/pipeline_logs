import { Controller, Get, Param } from '@nestjs/common';
import { LogsService } from '@features/logs/logs.service';

@Controller('logs')
export class LogsController {
    constructor(private readonly logsService: LogsService) {}
    @Get(':input')
    search(@Param('input') input: string) {
        return this.logsService.search(input);
    }
}
