import OrdersModel from '../models/orders.js'



export const createOrder = async (req, res) => {
    try {
        const doc = new OrdersModel(req.body)

        await  doc.save()

        res.json({
            message: 'Заказ добавлен',
            states: 'success'
        })


    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать заказ'
        })
    }
}

export const getAllOrders = async (req,res) => {
    try{
        let orders;
        if (req.query.status) {
            orders = await OrdersModel.find({
                status: req.query.status
            })
        } else {
            orders = await OrdersModel.find()
        }

        res.json(orders)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить заказы'
        })
    }
}

export const getOneOrder = async (req,res) => {
    try{
        const order = await OrdersModel.findById(req.params.id)

        res.json(order)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить заказ'
        })
    }
}



export const editOneOrder = async (req, res) => {
    try {

        await OrdersModel.updateOne({_id: req.params.id},
            req.body,
            {returnDocument: 'after'})

        res.json({
            message: 'Заказ успешно изменен',
            status: 'success'
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось изменить заказ'
        })
    }
}

export const deleteOneOrder = async (req, res) => {
    try {

        await OrdersModel.deleteOne({_id: req.params.id})

        res.json({
            message: 'Заказ успешно удалён',
            status: 'success'
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось удалить Заказ'
        })
    }
}
