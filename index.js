import express from 'express'
import mongoose from "mongoose";
import {
    addReviewValidation, editReviewValidation,
    loginUserValidation,
    registerUserValidation,
    resetPasswordValidation
} from "./validations/validations.js";
import handeValidators from "./validations/validations.js"
import {loginUser, registerUser, resetPassword} from "./controller/auth.js";
import checkAuth from "./validations/checkAuth.js";
import {addReview, deleteOneReview, editOneReview, getAllReviews, getOneReview} from "./controller/reviews.js";

const api = express()

api.use(express.json())

const mongoDBPassword = 'itrun2023'

mongoose.connect(`mongodb+srv://itrun:${mongoDBPassword}@itrun.dgzi3wd.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('Mongo DB успешно запущен'))
    .catch((err) =>  console.log('Ошибка при запуске Mongo DB ' ,err))

const PORT = process.env.PORT || 4444


// auth

api.post('/register', registerUserValidation, handeValidators, registerUser)
api.post('/login', loginUserValidation, handeValidators, loginUser)
api.patch('/reset/password', resetPasswordValidation, handeValidators, checkAuth, resetPassword)


// reviews

api.post('/reviews', addReviewValidation, handeValidators, checkAuth, addReview )
api.get('/reviews', getAllReviews )
api.get('/reviews/:id', getOneReview )

api.patch('/reviews/:id', editReviewValidation, handeValidators, checkAuth, editOneReview)
api.delete('/reviews/:id', checkAuth, deleteOneReview)





api.listen(PORT, () => {
    console.log(`Сервер запущен на порту http://localhost:${PORT}`)
})

