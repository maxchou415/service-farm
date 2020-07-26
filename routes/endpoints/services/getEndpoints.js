const config = require('config')
const { endpoints: Endpoints } = require('@models')

const DEFAULT_PAGINATION_LIMIT = config.get('database.pagination.limit')

module.exports = async ({ limit = DEFAULT_PAGINATION_LIMIT, page = 1 }) => {
  limit = Number(limit)
  page = Number(page)

  let endpoints
  try {
    endpoints = await Endpoints.findAndCountAll({
      limit,
      offset: (Number(page) === 1) ? 0 : (Number(page) - 1) * limit || 0
    })
  } catch (error) {
    throw new Error(error)
  }
  return {
    endpoints,
    pagination: {
      limit,
      page
    }
  }
}
