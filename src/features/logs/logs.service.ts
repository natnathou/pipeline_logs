import { Injectable, Logger } from '@nestjs/common';
import { LogDto } from '@features/kafka-producer/dtos/log.dto';
import { getErrorMessage, handlerGeneralException } from '@src/shared/utils';
import { LogProvider } from '@features/logs/log.provider';

@Injectable()
export class LogsService {
    private readonly logger = new Logger(LogsService.name);

    constructor(private readonly logProvider: LogProvider) {}

    async saveLog(data: LogDto) {
        try {
            this.logger.log(`LogsService | saveLog | start`);
            const response = await this.logProvider.saveLog(data);
            this.logger.log(`LogsService | saveLog | end - log id ${response?._id} saved`);

            return response;
        } catch (err) {
            this.logger.error(`LogsService | saveLog | error - ${getErrorMessage(err)}`);
        }
    }

    async search(text: string) {
        try {
            this.logger.log(`LogsService | search | start to search ${text}`);
            const response = await this.logProvider.search(text);
            this.logger.log(`LogsService | search | end to search ${text}`);

            return response;
        } catch (err) {
            this.logger.error(`LogsService | search | error - ${getErrorMessage(err)}`);
            handlerGeneralException(err);
        }
    }
}
