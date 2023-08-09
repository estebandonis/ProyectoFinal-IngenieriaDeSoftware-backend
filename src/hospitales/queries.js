const AllHospitales = "SELECT * FROM hospitales WHERE estado='aprobado' ORDER BY hospital_id"
const InsertHospital = "INSERT INTO hospitales (nombre, direccion, descripcion, zona, estado, user_id) VALUES ($1, $2, $3, $4, 'espera', (SELECT user_id FROM users WHERE correo = $5))";

module.exports = {
  AllHospitales,
  InsertHospital,
};