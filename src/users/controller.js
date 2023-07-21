const { error } = require('console')
const pool = require('../../db')
const queries = require('./queries')
const { response } = require('express')
const { parse } = require('path')
const { NOMEM } = require('dns')
const { password } = require('pg/lib/defaults')


const AllUsers = (req, res) => {
    pool.query(queries.AllUsers, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const ValidateUser = (req, res) => {
    const correo = req.params.correo
    const password = req.params.password

    pool.query(queries.ValidateEmail, [correo], (error, results) => {
        
        if (error) throw error
        if (results.rowCount != 0)
            pool.query(queries.ValidateUser, [correo, password], (error, results) => {
                if (error) throw error
                if (results.rowCount == 0)
                    res.send(['La contraseña ingresada es incorrecta'])
                else
                    res.send(true)
            })
        else
            res.send(['El correo ingresado no existe'])
    })
}

const UpdateUserPassword = (req, res) => {
    const correo = req.params.correo
    const old_password = String(req.params.old_password)
    const new_password = String(req.params.new_password)

    pool.query(queries.ValidateUser, [correo, old_password], (error, results) => {

        if (error) throw error
        if (results.rowCount != 0)
            pool.query(queries.UpdateUserPassword, [correo, old_password, new_password], (error, results) => {
                if (error) throw error
                if (results.rowCount != 0)
                    res.send(true)
            })
        else
            res.send(['La contraseña ingresada es incorrecta'])
    })
}

const AddUser = (req, res) => {
    const correo = req.params.correo
    const password = String(req.params.password)

    pool.query(queries.ValidateEmail, [correo], (error, results) => {
        
        if (error) throw error
        if (results.rowCount == 0)
            pool.query(queries.AddUser, [correo, password], (error, results) => {
                if (error) throw error
                res.send(true)
            })
        else
            res.send(['El correo ingresado ya existe'])
    })
}

module.exports = {
    AllUsers,
    ValidateUser,
    UpdateUserPassword,
    AddUser,
}