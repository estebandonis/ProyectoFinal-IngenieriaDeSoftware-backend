const Pool = require('pg').Pool

const pool = new Pool({
    host: "medieasy.postgres.database.azure.com",
    user: "medieasy@medieasy",
    port: 5432,
    password: "Ingsoft2",
    database: "medieasy"
})

module.exports = pool