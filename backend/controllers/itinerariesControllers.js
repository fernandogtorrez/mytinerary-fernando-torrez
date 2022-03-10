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
    obtenerUnItinerario: async (req, res) =>{
        const id = req.params.id
        console.log(req.params);

        let itinerario
        let error = null

        try{
            itinerario = await Itinerarios.findOne({_id:id})
            console.log(itinerario);
        }catch(err){
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : itinerario,
            success: error ? false : true,
            error: error
        })
    },
   /*  cargarItinerario: async(req, res)=>{
        console.log(req.body)
        const {ciudad, pais, descripcion}= req.body.dataInput
        new Itinerarios({
            nombre: ciudad,
            pais:pais,
            descripcion: descripcion,
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
    } */
}
module.exports = itinerariesController