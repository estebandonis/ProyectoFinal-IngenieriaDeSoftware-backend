const Pool = require('pg').Pool

const pool = new Pool({
    host: "database-1.cgjrnbwhoqpq.us-east-1.rds.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "12345678",
    database: "MedicEZ"
})

module.exports = pool