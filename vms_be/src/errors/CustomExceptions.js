import {
  CommonException,
  HttpStatus,
  ExceptionCode,
  ExceptionIdentifier,
} from "./CommonException.js";

// 리소스가 존재하지 않을 때
export class NotFoundException extends CommonException {
  constructor(message = "Resource not found") {
    super({
      status: HttpStatus.NOT_FOUND,
      code: ExceptionCode.RESOURCE_NOT_FOUND,
      message,
      identifier: ExceptionIdentifier.RESOURCE_ERROR,
    });
  }
}

// 클라이언트 요청이 잘못되었을 때
export class BadRequestException extends CommonException {
  constructor(message = "Bad request") {
    super({
      status: HttpStatus.BAD_REQUEST,
      code: ExceptionCode.VALIDATION_ERROR,
      message,
      identifier: ExceptionIdentifier.INPUT_ERROR,
    });
  }
}

// 인증이 필요한데 인증되지 않았을 때
export class UnauthorizedException extends CommonException {
  constructor(message = "Unauthorized access") {
    super({
      status: HttpStatus.UNAUTHORIZED,
      code: ExceptionCode.AUTHENTICATION_ERROR,
      message,
      identifier: ExceptionIdentifier.AUTHENTICATION_ERROR,
    });
  }
}

// 권한이 없어서 접근할 수 없을 때
export class ForbiddenException extends CommonException {
  constructor(message = "Forbidden access") {
    super({
      status: HttpStatus.FORBIDDEN,
      code: ExceptionCode.PERMISSION_DENIED,
      message,
      identifier: ExceptionIdentifier.AUTHORIZATION_ERROR,
    });
  }
}

// 데이터 충돌이 발생했을 때
export class ConflictException extends CommonException {
  constructor(message = "Conflict occurred") {
    super({
      status: HttpStatus.CONFLICT,
      code: ExceptionCode.BUSINESS_LOGIC_ERROR,
      message,
      identifier: ExceptionIdentifier.SYSTEM_ERROR,
    });
  }
}

// 요청이 이해되지만 처리할 수 없을 때
export class UnprocessableEntityException extends CommonException {
  constructor(message = "Unprocessable entity") {
    super({
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      code: ExceptionCode.DATA_INTEGRITY_ERROR,
      message,
      identifier: ExceptionIdentifier.INPUT_ERROR,
    });
  }
}

// 너무 많은 요청이 들어왔을 때
export class RateLimitExceededException extends CommonException {
  constructor(message = "Rate limit exceeded") {
    super({
      status: HttpStatus.TOO_MANY_REQUESTS,
      code: ExceptionCode.RATE_LIMIT_EXCEEDED,
      message,
      identifier: ExceptionIdentifier.PERFORMANCE_ERROR,
    });
  }
}

// 서비스가 사용 불가능할 때
export class ServiceUnavailableException extends CommonException {
  constructor(message = "Service unavailable") {
    super({
      status: HttpStatus.SERVICE_UNAVAILABLE,
      code: ExceptionCode.EXTERNAL_SERVICE_ERROR,
      message,
      identifier: ExceptionIdentifier.EXTERNAL_DEPENDENCY_ERROR,
    });
  }
}
