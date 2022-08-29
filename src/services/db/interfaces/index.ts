export interface Entity {
    _id: string;
    functionName?: string;
    message?: string;
    payload?: { [key: string]: any };
}

export interface SearchReturn {
    total: number;
    result: Entity[];
}

export interface Shards {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
}

export interface Total {
    value: number;
    relation: string;
}

export interface Source {
    functionName: string;
    message: string;
}

export interface Hit {
    _index: string;
    _id: string;
    _score: number;
    _source: Source;
}

export interface Hits {
    total: Total;
    max_score: number;
    hits: Hit[];
}

export interface RootObjectSearchResult {
    took: number;
    timed_out: boolean;
    _shards: Shards;
    hits: Hits;
}
