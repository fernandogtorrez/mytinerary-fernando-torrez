const Router = require('express').Router()
const validator = require('../config/validator')

const ciudadesController = require('../controllers/ciudadesControllers')
const itinerariesController = require('../controllers/itinerariesControllers')
const { verifyEmail } = require('../controllers/userControllers')
const usersControllers = require('../controllers/userControllers')

const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad} = ciudadesController
const {obtenerItinerarios, obtenerItinerariosPorId, cargarItinerario, modificarItinerario, borrarItinerario} = itinerariesController
const {signUpUsers, signInUser, signOutUser} = usersControllers

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/ciudad/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad)

Router.route('/itineraries')
.get(obtenerItinerarios)
.post(cargarItinerario)

Router.route('/itineraries/:id')
.delete(borrarItinerario)
.get(obtenerItinerariosPorId)
.put(modificarItinerario)

Router.route('/auth/signUp')
.post(validator,signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniquiString') // RECIBE EL LINK DE USUARIO
.get(verifyEmail)// LLAMA A FUNCION DE VERIFICACION

module.exports = Router