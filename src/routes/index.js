const Router = require('express')
const router = new Router()
const usersController = require('../controllers/userController')

router.post('auth/register', usersController.register)
router.post('auth/login', usersController.login)
router.get('auth/profile', usersController.profile)

module.exports = router