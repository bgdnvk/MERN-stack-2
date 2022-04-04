import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    description: String,
    likes: Number
})

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Item = mongoose.model('Item', itemSchema)

export { Item }