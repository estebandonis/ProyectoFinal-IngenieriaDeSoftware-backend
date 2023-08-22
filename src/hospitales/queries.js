const AllHospitales = "SELECT * FROM hospitales WHERE estado='aprobado' ORDER BY hospital_id"
const InsertHospital = "INSERT INTO hospitales (nombre, direccion, descripcion, zona, estado, user_id) VALUES ($1, $2, $3, $4, 'espera', (SELECT user_id FROM users WHERE correo = $5))";
const UpdateHospitalName = "UPDATE hospitales SET nombre = $2 WHERE hospital_id = $1"
const UpdateHospitalDirection = "UPDATE hospitales SET direccion = $2 WHERE hospital_id = $1"
const UpdateHospitalDescription = "UPDATE hospitales SET descripcion = $2 WHERE hospital_id = $1"
const UpdateHospitalZone = "UPDATE hospitales SET zona = $2 WHERE hospital_id = $1"

module.exports = {
  AllHospitales,
  InsertHospital,
  UpdateHospitalName,
  UpdateHospitalDirection,
  UpdateHospitalDescription,
  UpdateHospitalZone,
};