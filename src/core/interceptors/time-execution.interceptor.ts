import {CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimeExecutionInterceptor implements NestInterceptor {
    private readonly logger = new Logger(TimeExecutionInterceptor.name);

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const controller = context.getHandler()?.name;
        const start = Date.now();
        return next.handle().pipe(
            tap(() => {
                const end = Date.now();
                const message = `[controller]: ${controller} - [time execution]: ${end - start}ms`;
                if(controller !== 'livenessCheck')
                    return this.logger.log(`TimeExecutionInterceptor | intercept | ${message}`);
            }),
        );
    }
}
