const responseHandler = require('@utils/responseHandlers')
const errorMessageMap = require('../../../infra/utils/responseHandlers/errorMessageMap')

const { getEndpoints } = require('../services')

module.exports = async (ctx) => {
  let data
  try {
    data = await getEndpoints({ limit: 10 })
  } catch (error) {
    ctx.throw(errorMessageMap.FETCH_ENDPOINTS_FAILURE)
    throw error
  }
  responseHandler.success(ctx, 200, data)
}
