import { CommonException } from "../errors/CommonException.js";

// 커스텀 에러 핸들러
const customErrorHandler = (err, req, res, next) => {
  if (err instanceof CommonException) {
    return res.status(err.status).json({
      error: {
        message: err.message,
        code: err.code,
        identifier: err.identifier,
        reason: err.reason,
        occuredAt: err.occuredAt,
      },
    });
  }
  next(err);
};

// 일반 에러 핸들러
const generalErrorHandler = (err, req, res, next) => {
  console.error("에러 발생:", err);
  res.status(500).json({
    error: {
      message: "서버 내부 에러",
      code: "UNKNOWN_ERROR",
      occuredAt: new Date().toISOString(),
    },
  });
};

const errorHandlers = [customErrorHandler, generalErrorHandler];

export default errorHandlers;
