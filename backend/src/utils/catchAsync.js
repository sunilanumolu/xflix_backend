function catchAsync(functn) {
    return function(req, res, next) {
      Promise.resolve(functn(req, res, next)).catch((err) => next(err));
    }
  }
  
  module.exports = catchAsync;