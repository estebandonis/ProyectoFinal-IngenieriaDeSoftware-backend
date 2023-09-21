const { error } = require('console')
const pool = require('../../db')
const queries = require('./queries')
const { response } = require('express')
const { parse } = require('path')
const { NOMEM } = require('dns')


const AllReviews = (req, res) => {
    pool.query(queries.AllReviews, (error, results) => {
        if (error) throw error
        else
            res.status(200).json(results.rows)
    })
}

const HospitalReviews = (req, res) => {
    const { id } = req.params

    pool.query(queries.HospitalReviews, [id], (error, results) => {
        if (error) throw error
        else
            if (results.rowCount > 0)
                res.status(200).json(results.rows)
            else
                res.send(false)
    })
}

const AddUserReview = (req, res) => {
    const rating = parseFloat(req.params.rating).toFixed(1)
    const comentario = req.params.comentario
    const correo = req.params.correo
    const hospital_id = parseInt(req.params.id)

    pool.query(queries.AddUserReview, [rating, comentario, correo, hospital_id], (error, results) => {
        if (error) throw error
        else
            res.send(true)
    })
}

module.exports = {
    AllReviews,
    HospitalReviews,
    AddUserReview,
}