const express = require('express')

const deliveryBoyControlleur = require('../controllers/delivery.boy.controlleur')
const {registerRules, validator } = require('../middlewares/validator')
const Router = express.Router()

Router.post('/register', registerRules(), validator, deliveryBoyControlleur.register)
Router.post('/login', deliveryBoyControlleur.login)
Router.get('/confirmation/:emailToken',deliveryBoyControlleur.emailValidation)





module.exports = Router