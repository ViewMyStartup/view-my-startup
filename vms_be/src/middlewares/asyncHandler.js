// 어싱크 핸들러 자체의 목적은 따로 없는데 아마 로깅 목적으로도 쓸수있을듯합니다

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
