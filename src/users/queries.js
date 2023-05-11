const AllUsers = "SELECT correo FROM users ORDER BY userid"
const ValidateUser = "SELECT userid FROM users WHERE correo = $1 AND password = $2"
const ValidateEmail = "SELECT userid FROM users WHERE correo = $1"
const AddUser = "INSERT INTO users (correo, password, tipo, estado) VALUES ($1, $2, 'reviewer', 'activo')"

module.exports = {
    AllUsers,
    ValidateUser,
    ValidateEmail,
    AddUser,
}