export interface LogBody {
    functionName: string;
    message: string;
    payload?: { [key: string]: any };
}
