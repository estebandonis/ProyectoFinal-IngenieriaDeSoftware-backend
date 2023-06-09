const { error } = require('console')
const pool = require('../../db')
const queries = require('./queries')
const { response } = require('express')
const { parse } = require('path')
const { NOMEM } = require('dns')


const AllHospitales = (req, res) => {
    pool.query(queries.AllHospitales, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

module.exports = {
    AllHospitales,
}