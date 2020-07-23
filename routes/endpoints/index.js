const router = require('@koa/router')()

const controllers = require('./controllers')

router.get('/', controllers.getEndpoints)
router.get('/:endpointURL', controllers.getEndpointByEndpointURL)
router.get('/:endpointURL/services', controllers.getServicesByEndpointURL)

module.exports = router
