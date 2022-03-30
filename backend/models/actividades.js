const mongoose = require('mongoose')

const activitiesSchema = new mongoose.Schema({
    name: {type:String, required:true},
    imageAct: {type:String, required:true},
    id_itinerary:{type:mongoose.Types.ObjectId,ref:'itineraries', required:true},
})

const activity = mongoose.model('activities', activitiesSchema)
module.exports = activity