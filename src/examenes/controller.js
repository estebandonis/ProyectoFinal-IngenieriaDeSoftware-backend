const { error } = require('console')
const pool = require('../../db')
const queries = require('./queries')
const { response } = require('express')
const { parse } = require('path')
const { NOMEM } = require('dns')


const AllExamenes = (req, res) => {
    pool.query(queries.AllExamenes, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const AllExamenesNames = (req, res) => {
    pool.query(queries.AllExamenesNames, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

module.exports = {
    AllExamenes,
    AllExamenesNames,
}