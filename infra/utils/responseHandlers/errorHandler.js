const errorMessageMap = require('./errorMessageMap')

module.exports = async (ctx, next) => {
  try {
    await next()
    if (ctx.status === 404) {
      ctx.status = 404
      ctx.body = {
        status: 'failed',
        message: 'RESOURCE_NOT_FOUND'
      }
    }
  } catch (error) {
    if (errorMessageMap.hasOwnProperty(error.message)) {
      const getErrorMessage = errorMessageMap[error.message]
      ctx.status = getErrorMessage.status || 500
      ctx.body = {
        status: 'failed',
        message: getErrorMessage.message
      }
      ctx.app.emit('error', error, ctx)
    } else {
      const getErrorMessage = errorMessageMap['BAD_REQUEST']
      ctx.status = getErrorMessage.status || 500
      ctx.body = {
        status: 'failed',
        message: getErrorMessage.message
      }
      ctx.app.emit('error', error, ctx)
    }
  }
}
