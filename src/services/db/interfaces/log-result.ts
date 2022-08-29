import { LogBody } from '@services/db/interfaces/log-body';

export interface LogSearchResult {
    total: number;
    result: LogBody[];
}
