const mongoose = require('mongoose')

const itinerariosSchema = new mongoose.Schema({
    userName:{type:String, required:true},
    itineraryName:{type:String,required:true},
    price:{type:Number, required:true},
    like:{type:Array},
    duration:{type:Number, required:true},
    hashtags:{type:Array, required:true},
    image:{type:String, required:true},
    comments:[{
        comment:{type:String, required:true},
        userID: {type:mongoose.Types.ObjectId, ref:'users'},
    }],
    id_city: {type: mongoose.Types.ObjectId, ref: 'cities'}

})

const Itinerarios = mongoose.model('itineraries', itinerariosSchema)
module.exports = Itinerarios
