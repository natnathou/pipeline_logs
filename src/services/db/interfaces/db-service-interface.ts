import { Entity, SearchReturn } from '@services/db/interfaces/index';

export interface DbServiceInterface {
    insert(body: any, index: string): Promise<Entity>;

    search(text: string, index: string): Promise<SearchReturn>;
}
