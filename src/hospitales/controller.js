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

const AllHospitalesEstados = (req, res) => {
    pool.query(queries.AllHospitalesEstados, (error, results) => {
      if (error) throw error
      else 
         res.status(200).json(results.rows)
  });
};

const AllHospitalsByManager = (req, res) => {
  const userId = req.params.user_id;

  pool.query(queries.AllHospitalesByManager, [userId], (error, results) => {
      if (error) throw error
        else {
        res.status(200).json(results.rows);
      }
  });
};


const UpdateHospitalEstado = (req, res) => {
  const hospitalId = req.params.hospitalId;
  const newEstado = req.params.newEstado;

  pool.query(queries.UpdateHospitalEstado, [newEstado, hospitalId], (error, results) => {
      if (error) {
          console.error('Error al actualizar el estado del hospital', error);
          res.send(false);
      } else {
          res.send(true);
      }
  });
};

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

const UpdateHospitalInfo = (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const direction = req.params.direction
    const description = req.params.description
    const zone = req.params.zone
  
    pool.query(queries.UpdateHospitalInfo, [id, name, direction, description, zone], (error, results) => {
      if (error) {
        console.error('Error al actualizar la información del hospital', error);
        res.send(false);
      } else {
        res.send(true);
      }
    });
  };

module.exports = {
    AllHospitales,
    AllHospitalsByManager,
    AllHospitalesEstados,
    UpdateHospitalEstado,
    InsertHospital,
    UpdateHospitalInfo,
}