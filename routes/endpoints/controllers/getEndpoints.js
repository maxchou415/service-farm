const { getEndpoints } = require('../services')

module.exports = async (ctx) => {
  let data
  try {
    data = await getEndpoints({ limit: 10 })
  } catch (error) {
    throw error
  }
  ctx.body = {
    data
  }
}
