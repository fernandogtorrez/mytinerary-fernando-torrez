const mongoose = require('mongoose')

const ciudadesSchema = new mongoose.Schema({
    country:{type:String, required:true},
    cities:{type:String, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true}
})

const Ciudades = mongoose.model('cities', ciudadesSchema)
module.exports = Ciudades