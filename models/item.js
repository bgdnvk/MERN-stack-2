//in order to communicate with mongoDB we will use mongoose
//it simplifies the process
import mongoose from "mongoose"
//we define the schema of the database
//description field is a string and likes is a number
const itemSchema = new mongoose.Schema({
    description: String,
    likes: Number
})
//we modify the schema and pass it to JSON
//mongoDB adds two fields we don't necessarily want
//_id is the id the objects get randomly assigned
//we transform _id into a string variable called .id and delete _id
//we also delete __v
//try the data without deleting __v
itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
//mongoose needs you to define a 'model' with your schema
//then use that model to operate with different functions
const Item = mongoose.model('Item', itemSchema)

export { Item }