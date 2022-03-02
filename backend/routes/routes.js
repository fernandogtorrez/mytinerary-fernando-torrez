const Router = require('express').Router()

const { modificarCiudad } = require('../controllers/ciudadesControllers')
const ciudadesController = require('../controllers/ciudadesControllers')

const {obtenerCiudades, cargarCiudad, borrarCiudad} = ciudadesController

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/allcities/:id')
.delete(cargarCiudad)
.put(modificarCiudad)

module.exports = Router