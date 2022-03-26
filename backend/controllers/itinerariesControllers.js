const { response } = require('express')
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
        console.log(id)
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
    },

    likeDislike: async (req, res) => {
        const id = req.params.id
        const user = req.body.user
        let Itinerarios

        try{
            Itinerarios = await Itinerarios.findOne({_id:id})

            if(Itinerarios.like.includes(user)){
                Itinerarios.findOneAndUpdate({_id:id},{$pull:{like:user}},{new:true})
                .then(response => res.json({success:true, res: res.like}))
                .catch(error => console.log(error))
            }else{
                Itinerarios.findOneAndUpdate({_id:id},{$push:{like:user}},{new:true})
                .then(response => res.json({success:true, res: res.like}))
                .catch(error => console.log(error))
            }
        }catch(err){
            error = err
            res.json({
                success:false,
                response: erorr,
            })
        }
    }
}
module.exports = itinerariesController