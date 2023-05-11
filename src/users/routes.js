const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get("/", controller.AllUsers)
router.get("/validateUser/:correo&:password", controller.ValidateUser)

router.post("/addUser/:correo&:password", controller.AddUser)

module.exports = router