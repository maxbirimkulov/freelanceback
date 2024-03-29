import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
        type: Number,
        required: true
    },
    technology: {
        type: Array,
        required: true
    },
    deadline: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        required:true
    },
    status: {
        type: String,
        required: true
    },
    creatorId: {
        type: String,
        required: true
    },
    executorId: {
        type: String,
    },

}, {
    timestamps: true
})

export default mongoose.model('services', ordersSchema)