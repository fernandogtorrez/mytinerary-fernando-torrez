const Router = require('express').Router()

const ciudadesController = require('../controllers/ciudadesControllers')
const itinerariesController = require('../controllers/itinerariesControllers')

const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad} = ciudadesController
const {obtenerItinerarios, obtenerUnItinerario, cargarItinerario, borrarItinerario, modificarItinerario} = itinerariesController

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/ciudad/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad)

Router.route('/itineraries')
.get(obtenerItinerarios)

Router.route('/itineraries/:id')
.get(obtenerUnItinerario)

module.exports = Router