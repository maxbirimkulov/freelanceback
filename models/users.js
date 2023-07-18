import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    image: String,
    status: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    resume: {
        type: File
    },
    profession: {
        type: Array
    }
}, {
    timestamps: true
})

export default mongoose.model('users', usersSchema)