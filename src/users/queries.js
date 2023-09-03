const AllUsers = "SELECT user_id, correo, tipo, dpi, estado FROM users ORDER BY user_id"
const ValidateUser = "SELECT user_id, tipo FROM users WHERE correo = $1 AND password = $2"
const ValidateEmail = "SELECT user_id FROM users WHERE correo = $1"
const UpdateUserPassword = "UPDATE users SET password = $3 WHERE correo = $1 AND password = $2"
const AddUser = "INSERT INTO users (correo, password, tipo, dpi, estado) VALUES ($1, $2, 'reviewer', '0', 'activo')"
const AddDPI = "UPDATE users SET dpi = $1, tipo = 'manager' WHERE correo = $2"
const getDPI = "SELECT dpi FROM users WHERE correo = $1"
const getTipo = "SELECT user_id, tipo FROM users WHERE correo = $1"

module.exports = {
    AllUsers,
    ValidateUser,
    ValidateEmail,
    UpdateUserPassword,
    AddUser,
    AddDPI,
    getDPI,
    getTipo,
}