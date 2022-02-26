const mongoose = require('mongoose')

const ciudadesSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    pais:{type:String, required:true},
    descripcion:{type:String, required:true}
})

const Ciudades = mongoose.model('ciudades', ciudadesSchema)
module.exports = Ciudades