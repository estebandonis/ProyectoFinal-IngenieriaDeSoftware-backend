const AllServicios = "SELECT * FROM servicios ORDER BY servicioid"
const HospitalServices = "SELECT examenes.nombre, precio FROM servicios INNER JOIN examenes ON examenid = examen_id WHERE hospitalid = $1"

module.exports = {
    AllServicios,
    HospitalServices,
}