const Router = require('express').Router()

const ciudadesController = require('../controllers/ciudadesControllers')

const {obtenerCiudades, cargarCiudad, borrarCiudad} = ciudadesController

Router.route('/ciudades')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/ciudades/:id')
.delete(cargarCiudad)

module.exports = Router