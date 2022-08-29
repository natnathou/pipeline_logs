import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import moment from 'moment';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(HttpExceptionFilter.name);

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const message = exception.getResponse() as any;

        this.logger.error(
            `HttpExceptionFilter | catch | [statusCode]: ${status} - [path]: ${request.url} - [message]: ${message.message} - [error]: ${message?.error}`,
        );
        if (message?.zoomError) {
            response.status(status).json({
                code: message?.code,
                status: status,
                message: {
                    code: message?.code,
                    statusCode: status,
                    zoomError: true,
                    detailMessage: message?.detailMessage,
                    errorMessage: message?.errorMessage,
                    err_uuid: message?.err_uuid,
                },
            });
        } else {
            response.status(status).json({
                statusCode: status,
                timestamp: moment().format('MMMM Do YYYY, h:mm:ss:ms a'),
                path: request.url,
                message: message?.message,
                error: message?.error,
            });
        }
    }
}
