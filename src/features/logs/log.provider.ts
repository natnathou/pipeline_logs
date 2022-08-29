import { Inject, Injectable, Logger } from '@nestjs/common';
import { LogDto } from '@features/kafka-producer/dtos/log.dto';
import { getErrorMessage } from '@src/shared/utils';
import { DbServiceInterface } from '@services/db/interfaces/db-service-interface';

@Injectable()
export class LogProvider {
    private readonly logger = new Logger(LogProvider.name);

    constructor(@Inject('DbServiceInterface') private readonly dbService: DbServiceInterface) {}

    async saveLog(data: LogDto) {
        try {
            this.logger.log(`LogProvider | saveLog | start`);
            const response = await this.dbService.insert(data, 'logs');
            this.logger.log(`LogProvider | saveLog | end`);

            return response;
        } catch (err) {
            this.logger.error(`LogProvider | saveLog | error - ${getErrorMessage(err)}`);
        }
    }

    async search(text: string) {
        try {
            this.logger.log(`LogProvider | search | start`);
            const response = await this.dbService.search(text, 'logs');
            this.logger.log(`LogProvider | search | end`);

            return response;
        } catch (err) {
            this.logger.error(`LogProvider | search | error - ${getErrorMessage(err)}`);
        }
    }
}
