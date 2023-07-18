const AllExamenes = "SELECT * FROM examenes ORDER BY examen_id"
const AllExamenesNames = "SELECT nombre FROM examenes ORDER BY examen_id"

module.exports = {
    AllExamenes,
    AllExamenesNames,
}