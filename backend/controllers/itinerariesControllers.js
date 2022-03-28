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
        const user = req.user.id
        let itinerario

        try{
            itinerario = await Itinerarios.findOne({_id:id})

            if(itinerario.like.includes(user)){
                Itinerarios.findOneAndUpdate({_id:id},{$pull:{like:user}},{new:true})
                .then((response) => res.json({success:true, response: response.like}))
                .catch(error => console.log(error))
            }else{
                Itinerarios.findOneAndUpdate({_id:id},{$push:{like:user}},{new:true})
                .then(response => res.json({success:true, response: response.like}))
                .catch(error => console.log(error))
            }
        }catch(err){
            error = err
            res.json({
                success:false,
                response: erorr,
            })
        }
    },

    addComment: async (req, res) => {
        const {itinerario,comment} = req.body.comment
        const user = req.user._id
        try {
            const nuevoComment = await Itinerarios.findOneAndUpdate({_id:itinerario}, {$push: {comments: {comment: comment, userID: user}}}, {new: true}).populate("autor", {fullName:1}).populate("comments.userID", {fullName:1})
            res.json({ success: true, response:{nuevoComment}, message:"gracias por dejarnos tu comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }

    },

    modifiComment: async (req, res) => {
        const {commentID,comment} = req.body.comment
        const user = req.user._id
        try {
            const newComment = await Places.findOneAndUpdate({"comments._id":commentID}, {$set: {"comments.$.comment": comment}}, {new: true})
            console.log(newComment)
            res.json({ success: true, response:{newComment}, message:"tu comentario a sido modificado" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, message: "Algo a salido mal intentalo en unos minutos" })
        }

    },

    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Places.findOneAndUpdate({"comments._id":id}, {$pull: {comments: {_id: id}}}, {new: true})
          console.log(deleteComment)
            res.json({ success: true, response:{deleteComment}, message: "has eliminado el comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }

    },
}
module.exports = itinerariesController