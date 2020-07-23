const router = require('@koa/router')()

router.prefix('/api/v1')

router.use('/endpoints', require('./endpoints').routes())

module.exports = router
