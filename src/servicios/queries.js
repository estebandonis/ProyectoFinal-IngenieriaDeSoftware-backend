const AllServicios = "SELECT * FROM servicios ORDER BY servicio_id"
const HospitalServices = "SELECT examenes.nombre, precio FROM servicios INNER JOIN examenes USING(examen_id) WHERE hospital_id = $1"
const AddServicio = "INSERT INTO servicios (examen_id, precio, hospital_id) VALUES ((SELECT examen_id FROM examenes WHERE nombre = $1), $2, (SELECT hospital_id FROM hospitales WHERE nombre = $3))"

module.exports = {
    AllServicios,
    HospitalServices,
    AddServicio,
}