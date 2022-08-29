import { Injectable, Logger } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { LogBody } from '@services/db/interfaces/log-body';
import { getErrorMessage } from '@src/shared/utils';
import { Entity, SearchReturn } from '@services/db/interfaces';
import { DbServiceInterface } from '@services/db/interfaces/db-service-interface';
import { SearchTotalHits } from '@elastic/elasticsearch/lib/api/types';

@Injectable()
export class DbService implements DbServiceInterface {
    private readonly logger = new Logger(DbService.name);

    constructor(private readonly elasticSearchService: ElasticsearchService) {}

    async insert(body: any, index: string): Promise<Entity> {
        try {
            this.logger.log(`DbService | indexLog | start`);

            const response = await this.elasticSearchService.index<LogBody>({
                index: index,
                body,
            });
            this.logger.log(`DbService | indexLog | end`);
            return response;
        } catch (err) {
            this.logger.error(`DbService | indexLog | error - ${getErrorMessage(err)}`);
        }
    }

    async search(text: string, index: string): Promise<SearchReturn> {
        try {
            this.logger.log(`DbService | search | start`);

            const response = await this.elasticSearchService.search<LogBody>({
                index: index,
                body: {
                    query: {
                        bool: {
                            should: [
                                {
                                    multi_match: {
                                        query: text,
                                        fields: ['functionName', 'message'],
                                    },
                                },
                            ],
                            minimum_should_match: 1,
                        },
                    },
                },
            });

            const searchTotalHits = response?.hits?.total as SearchTotalHits;

            const data: SearchReturn = {
                total: searchTotalHits?.value,
                result: response?.hits?.hits?.map((h) => {
                    return {
                        _id: h._id,
                        funtionName: h?._source?.functionName,
                        message: h?._source?.message,
                        payload: h?._source?.payload,
                    };
                }),
            };

            this.logger.log(`DbService | search | end`);
            return data;
        } catch (err) {
            this.logger.error(`DbService | search | error - ${getErrorMessage(err)}`);
        }
    }
}
