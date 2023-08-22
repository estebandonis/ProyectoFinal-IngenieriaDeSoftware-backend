const { Router } = require('express')
const controller = require('./controller')

const router = Router();

router.get("/", controller.AllHospitales);
router.post("/addHospital/:name&:direc&:descrip&:zona&:correo", controller.InsertHospital);

router.put("/updateHospitalName/:id&:name", controller.UpdateHospitalName);
router.put("/updateHospitalDirection/:id&:direction", controller.UpdateHospitalDirection);
router.put("/updateHospitalDescription/:id&:description", controller.UpdateHospitalDescription);
router.put("/updateHospitalZone/:id&:zone", controller.UpdateHospitalZone);

module.exports = router;