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
            itinerario = await Itinerarios.find({id_city:id}).populate('comments.userID')
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
        const {comment, itinerario} = req.body.comment
        const user = req.user.id
        try {
            const nuevoComment = await Itinerarios.findOneAndUpdate({_id:itinerario}, {$push: {comments: {comment: comment, userID: user}}}, {new: true}).populate('comments.userID')
            res.json({ success: true, response:{nuevoComment}, message:"Thanks you for let us your comment" })
        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong try again in a few minutes" })
        }

    },

    modifiComment: async (req, res) => {
        const {commentID,comment} = req.body.comment
        const user = req.user.id
        try {
            const newComment = await Itinerarios.findOneAndUpdate({"comments._id":commentID}, {$set: {"comments.$.comment": comment}}, {new: true})
            res.json({ success: true, response:{newComment}, message:"Your comment has been modified" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, message: "Something went wrong try again in a few minutes" })
        }

    },

    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user.id
        try {
            const deleteComment = await Itinerarios.findOneAndUpdate({"comments._id":id}, {$pull: {comments: {_id: id}}}, {new: true})
            res.json({ success: true, response:{deleteComment}, message: "You deleted the comment" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong try again in a few minutes" })
        }

    },
}
module.exports = itinerariesController