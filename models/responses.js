import mongoose from "mongoose";

const responsesSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    creatorId: {
        type: String,
        required: true
    },
     message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('responses', responsesSchema)