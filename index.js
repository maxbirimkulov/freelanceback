import express from 'express'
import mongoose from "mongoose";

const api = express()

const mongoDBPassword = 'itrun2023'

mongoose.connect(`mongodb+srv://itrun:${mongoDBPassword}@itrun.dgzi3wd.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('Mongo DB успешно запущен'))
    .catch((err) =>  console.log('Ошибка при запуске Mongo DB ' ,err))

const PORT = process.env.PORT || 4444





api.listen(PORT, () => {
    console.log(`Сервер запущен на порту http://localhost:${PORT}`)
})

