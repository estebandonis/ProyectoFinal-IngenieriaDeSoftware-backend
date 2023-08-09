const { Router } = require('express')
const controller = require('./controller')

const router = Router();

router.get("/", controller.AllHospitales);
router.post("/addHospital/:name&:direc&:descrip&:zona&:correo", controller.InsertHospital);

module.exports = router;