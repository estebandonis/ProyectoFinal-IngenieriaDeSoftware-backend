const { error } = require('console')
const pool = require('../../db')
const queries = require('./queries')
const { response } = require('express')
const { parse } = require('path')
const { NOMEM } = require('dns')


const AllServicios = (req, res) => {
    pool.query(queries.AllServicios, (error, results) => {
        if (error) throw error
        else
            res.status(200).json(results.rows)
    })
}

const HospitalServices = (req, res) => {
    const { id } = req.params

    pool.query(queries.HospitalServices, [id], (error, results) => {
        if (error) throw error
        if (results.rowCount > 0)
            res.status(200).json(results.rows)
        else
            res.send(false)
    })
}

const AddServicio = (req, res) => {
    const { examen, precio, hospital } = req.params

    pool.query(queries.AddServicio, [examen, precio, hospital], (error, results) => {
        if (error) throw error
        else
            res.status(200).json(results.rows)
    })
}

module.exports = {
    AllServicios,
    HospitalServices,
    AddServicio,
}