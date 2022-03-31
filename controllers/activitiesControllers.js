const Activities = require('../models/actividades')

const activitiesController = {

    obtenerActivities: async (req, res) => {
        let activities
        let error = null

        try{
            activities = await Activities.find()
        }catch(err){
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : {activities},
            success: error ? false : true,
            error: error
        })
    },

    obtenerActivitiesDeItinerario : async(req, res) => {
        try{
            console.log(req.params)
            const actividadesDeItinerario = await Activities.find({id_itinerary:req.params.id_itinerary})
            res.json({
                response: actividadesDeItinerario,
                success: true,
            })
        }catch(err){
            error = err
            console.log(error);
            res.json({
                response: error,
                success: false,
            })
        }
    },
    
    cargarActividad: async(req, res)=>{
        const {name, imageAct, id_itinerary}= req.body
        new Activities({
            name,
            imageAct,
            id_itinerary,
        }).save()
        .then((respuesta)=> res.json({respuesta}))
    },

    borrarActividad: async (req, res)=>{
        const id = req.params.id
        await Activities.findOneAndDelete({_id:id})
        .then((respuesta) => res.json({respuesta}))
    },
    modificarActividad: async (req, res)=>{
        const id = req.params.id
        const activities = req.body.dataInput

        let actividaddb = await Activities.findOneAndUpdate({_id:id}, activities)
        .then((respuesta) => res.json({respuesta}))
        console.log(actividaddb)
    },
}
module.exports = activitiesController