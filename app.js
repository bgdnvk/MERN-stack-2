import * as config from './utils/config.js'

import express from "express";
const app = express()

import { itemsRouter } from './controllers/items.js'

import mongoose from 'mongoose'

const connectToDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI)
        console.log(`connected to the database`)
    } catch (e) {
        console.log(`error connecting to the db: ${e}`)
    }
}
connectToDB()

app.use(express.json())

app.use('/api/items', itemsRouter)

export { app }
