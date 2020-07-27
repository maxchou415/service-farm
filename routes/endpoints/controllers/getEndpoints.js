const responseHandler = require('@utils/responseHandlers')
const errorMessageMap = require('../../../infra/utils/responseHandlers/errorMessageMap')

const { getEndpoints } = require('../services')

module.exports = async (ctx) => {
  let { limit, page } = ctx.query

  let endpoints, pagination
  try {
    ({ endpoints, pagination } = await getEndpoints({ limit, page }))
  } catch (error) {
    ctx.throw(errorMessageMap.FETCH_ENDPOINTS_FAILURE)
    return
  }
  const response = {
    endpoints: endpoints.rows,
    pagination: {
      ...pagination,
      total: endpoints.count
    }
  }
  responseHandler.success(ctx, 200, response)
}
