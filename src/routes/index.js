const Router = require('express')
const router = new Router()
const usersController = require('../controllers/userController')

router.post('/api/v1/auth/register', usersController.register)
router.post('/api/v1/auth/login', usersController.login)
router.get('/api/v1/auth/profile', usersController.profile)

module.exports = router