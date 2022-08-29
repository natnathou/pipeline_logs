import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { AppConfigModule, AppConfigService } from '@core/app-config';
import { DbService } from '@services/db/db.service';

const dbProvider = {
    provide: 'DbServiceInterface',
    useClass: DbService,
};

@Module({
    imports: [
        ElasticsearchModule.registerAsync({
            imports: [AppConfigModule],
            useFactory: async (config: AppConfigService) => ({
                    node: config.get('ELASTICSEARCH')?.node,
                },
            inject: [AppConfigService],
        }),
    ],
    providers: [dbProvider],
    exports: [ElasticsearchModule, dbProvider],
})
export class DbModule {}
