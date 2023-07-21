const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get("/", controller.AllUsers)
router.get("/validateUser/:correo&:password", controller.ValidateUser)

router.post("/addUser/:correo&:password", controller.AddUser)

router.put("/updateUserPassword/:correo&:old_password&:new_password", controller.UpdateUserPassword)

module.exports = router