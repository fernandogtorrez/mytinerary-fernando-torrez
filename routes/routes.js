const Router = require('express').Router()
const validator = require('../config/validator')
const passport = require('../config/passport')

const ciudadesController = require('../controllers/ciudadesControllers')
const itinerariesController = require('../controllers/itinerariesControllers')
const usersControllers = require('../controllers/userControllers')
const activitiesController = require('../controllers/activitiesControllers')

const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad} = ciudadesController
const {obtenerItinerarios, obtenerItinerariosPorId, cargarItinerario, modificarItinerario, borrarItinerario,likeDislike,addComment, modifiComment,deleteComment} = itinerariesController
const {signUpUser, signInUser, signOutUser, verifyEmail, verificarToken} = usersControllers
const {obtenerActivities, obtenerActivitiesDeItinerario,cargarActividad,modificarActividad,borrarActividad} = activitiesController

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
.post(validator, signUpUser)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString') // RECIBE EL LINK DE USUARIO
.get(verifyEmail)// LLAMA A FUNCION DE VERIFICACION

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)

Router.route('/likeDislike/:id')
.put(passport.authenticate('jwt',{ session:false }), likeDislike)

Router.route('/activities')
.get(obtenerActivities)
.post(cargarActividad)

Router.route('/activities/:id_itinerary')
.get(obtenerActivitiesDeItinerario)

Router.route('/activities/:id')
.delete(borrarActividad)
.put(modificarActividad)

Router.route('/comment')
.post(passport.authenticate('jwt',{ session: false }),addComment)
.put(passport.authenticate('jwt',{ session: false }),modifiComment)

Router.route('/comment/:id')
.post(passport.authenticate('jwt',{ session: false }),deleteComment)


module.exports = Router