const { error } = require('console')
const pool = require('../../db')
const queries = require('./queries')
const { response } = require('express')
const { parse } = require('path')
const { NOMEM } = require('dns')


const AllHospitales = (req, res) => {
    pool.query(queries.AllHospitales, (error, results) => {
        if (error) throw error
        else
          res.status(200).json(results.rows)
    })
}

const InsertHospital = (req, res) => {
    const name = req.params.name
    const descrip = req.params.descrip
    const direc = req.params.direc
    const zona = req.params.zona
    const correo = req.params.correo
  
    pool.query(queries.InsertHospital, [name, direc, descrip, zona, correo], (error, results) => {
      if (error) {
        console.error('Error al insertar el hospital', error);
        res.send(false);
      } else {
        res.send(true);
      }
    });
  };

module.exports = {
    AllHospitales,
    InsertHospital,
}