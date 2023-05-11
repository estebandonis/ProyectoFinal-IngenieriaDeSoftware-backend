const { error } = require('console')
const pool = require('../../db')
const queries = require('./queries')
const { response } = require('express')
const { parse } = require('path')
const { NOMEM } = require('dns')


const AllUsers = (req, res) => {
    pool.query(queries.AllUsers, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const ValidateUser = (req, res) => {
    const correo = req.params.correo
    const password = req.params.password

    pool.query(queries.ValidateUser, [correo, password], (error, results) => {
        if (error) throw error
        if (results.rowCount == 0)
            res.send(false)
        else
            res.send(true)
    })
}

const AddUser = (req, res) => {
    const correo = req.params.correo
    const password = String(req.params.password)

    pool.query(queries.AddUser, [correo, password], (error, results) => {
        if (error) throw error
        res.send(true)
    })
}

module.exports = {
    AllUsers,
    ValidateUser,
    AddUser,
}