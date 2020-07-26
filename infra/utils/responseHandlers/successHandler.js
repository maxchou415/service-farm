module.exports = async (ctx = {}, statusCode = 200, payload = {}) => {
  if (Object.keys(ctx).length === 0) {
    throw new Error('ctx is required')
  }
  if (isNaN(statusCode)) {
    throw new Error('statusCode error: statusCode must be Number')
  }
  if (String(statusCode).startsWith(4) || String(statusCode).startsWith(5)) {
    throw new Error('statusCode error: success response must be start with 2')
  }

  ctx.status = statusCode
  ctx.body = {
    status: 'success',
    data: payload
  }
}
