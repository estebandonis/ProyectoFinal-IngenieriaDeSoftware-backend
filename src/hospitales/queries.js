const AllHospitales = "SELECT * FROM hospitales WHERE estado='aprobado' ORDER BY hospitalid"

module.exports = {
    AllHospitales,
}