const AllServicios = "SELECT * FROM servicios ORDER BY servicio_id"
const HospitalServices = "SELECT examenes.nombre, precio FROM servicios INNER JOIN examenes USING(examen_id) WHERE hospital_id = $1"

module.exports = {
    AllServicios,
    HospitalServices,
}