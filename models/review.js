import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    createrId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

export default mongoose.model('reviews', reviewSchema)