import { ConfigService } from '@nestjs/config';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppConfigService {
    private readonly logger = new Logger(AppConfigService.name);

    constructor(private config: ConfigService) {}

    get(key: string) {
        return this.config.get(key);
    }

    setConfig(key: string, value: any) {
        this.logger.log('AppConfigService | setConfig', `setConfig | setting:${key}`);
        process.env[key] = value;
    }
}
