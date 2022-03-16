const Itinerarios = require('../models/itinerario')

const itinerariesController = {
    obtenerItinerarios: async (req,res) =>{
        let itinerario
        let error = null

        try{
            itinerario = await Itinerarios.find()
        }catch(err){
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : {itinerario},
            success: error ? false : true,
            error: error
        })
    },
    obtenerItinerariosPorId: async (req, res) =>{
        const id =  req.params.id

        let itinerario
        let error = null

        try{
            itinerario = await Itinerarios.find({id_city:id})
            console.log(itinerario)
        }catch(err){
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : itinerario,
            success: error ? false : true,
            error : error
        })
    },
    cargarItinerario: async(req, res)=>{
        console.log(req.body)
        const {userName, price, like, duration, hashtags, image, comment, id_city}= req.body
        new Itinerarios({
            userName,
            price,
            like,
            duration,
            hashtags,
            image,
            comment,
            id_city,
        }).save()
        .then((respuesta)=> res.json({respuesta}))
    },

    borrarItinerario: async (req, res)=>{
        const id = req.params.id
        await Itinerarios.findOneAndDelete({_id:id})
        .then((respuesta) => res.json({respuesta}))
    },
    modificarItinerario: async (req, res)=>{
        const id = req.params.id
        const itinerario = req.body.dataInput

        let itinerariodb = await Itinerarios.findOneAndUpdate({_id:id}, itinerario)
        .then((respuesta) => res.json({respuesta}))
        console.log(itinerariodb)
    }
}
module.exports = itinerariesController