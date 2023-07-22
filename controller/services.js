import ServiceModel from '../models/services.js'

export const addService = async (req,res) => {
    try {

        const doc = new ServiceModel(req.body)

    }catch (err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось добавить услугу'
        })
    }
}