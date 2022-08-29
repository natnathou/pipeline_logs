import {
    BadGatewayException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    GatewayTimeoutException,
    GoneException,
    HttpVersionNotSupportedException,
    ImATeapotException,
    InternalServerErrorException,
    NotFoundException,
    NotImplementedException,
    PayloadTooLargeException,
    PreconditionFailedException,
    RequestTimeoutException,
    ServiceUnavailableException,
    UnauthorizedException,
    UnprocessableEntityException,
    UnsupportedMediaTypeException,
} from '@nestjs/common';

export function handlerGeneralException(e: any, message?: string): void {
    let messageToReturn = e.message;
    if (message) messageToReturn = message;

    let finalStatus = e?.status ? e?.status : e?.response?.statusCode;

    if (!finalStatus) finalStatus = 500;

    switch (finalStatus) {
        case 400:
            throw new BadRequestException(messageToReturn);
            break;

        case 403:
            throw new ForbiddenException(messageToReturn);
            break;

        case 412:
            throw new PreconditionFailedException(messageToReturn);
            break;

        case 401:
            throw new UnauthorizedException(messageToReturn);
            break;

        case 404:
            throw new NotFoundException(messageToReturn);
            break;

        case 408:
            throw new RequestTimeoutException(messageToReturn);
            break;

        case 409:
            throw new ConflictException(messageToReturn);
            break;

        case 410:
            throw new GoneException(messageToReturn);
            break;

        case 505:
            throw new HttpVersionNotSupportedException(messageToReturn);
            break;

        case 413:
            throw new PayloadTooLargeException(messageToReturn);
            break;

        case 415:
            throw new UnsupportedMediaTypeException(messageToReturn);
            break;

        case 422:
            throw new UnprocessableEntityException(messageToReturn);
            break;

        case 418:
            throw new ImATeapotException(messageToReturn);
            break;

        case 501:
            throw new NotImplementedException(messageToReturn);
            break;

        case 502:
            throw new BadGatewayException(messageToReturn);
            break;

        case 503:
            throw new ServiceUnavailableException(messageToReturn);
            break;

        case 504:
            throw new GatewayTimeoutException(messageToReturn);
            break;
        default:
            throw new InternalServerErrorException(messageToReturn);
            break;
    }
}

export const getErrorMessage = (err) => {
    return err instanceof Error ? err.message : JSON.stringify(err);
};
