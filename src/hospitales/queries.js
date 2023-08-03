const AllHospitales = "SELECT * FROM hospitales WHERE estado='aprobado' ORDER BY hospital_id"

module.exports = {
    AllHospitales,
};