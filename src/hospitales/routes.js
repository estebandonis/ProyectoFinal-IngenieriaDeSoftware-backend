const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.AllHospitales);
router.post("/addHospital/:name&:direc&:descrip&:zona&:correo", controller.InsertHospital);
router.get("/estados", controller.AllHospitalesEstados);
router.put("/updateEstado/:hospitalId/:newEstado", controller.UpdateHospitalEstado);


module.exports = router;