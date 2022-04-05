import { Router } from "express"
import { Item } from "../models/item.js"
//define our router object
const itemsRouter = Router()
//GET or READ endpoint
//it's an async function that waits for the data thanks to await
//we get the data from the database by using our mongoose model
//one of the methods at the moongoose model is .find where you can get whatever you want
//find is empty so we get all the data
//afterwards we return a successful status and the JSON data
itemsRouter.get('/', async (req, res) => {
    const items = await Item.find({})
    res.status(200).json(items).end()
})
//in order to use a paramater we need to put ":id"
//then we can use the value of that "id" through req.params.id
//req stands for request, res stands for response
itemsRouter.get('/:id', async (req, res) => {
    const item = await Item.findById(req.params.id)
    //check if the object exists and deliver the relevant status
    if(item){
        res.status(200).json(item).end()
    } else{
        res.status(404).end()
    }
})
//POST or CREATE ednpoint
//we get the data sent to the server through req.body
itemsRouter.post('/', async (req, res) => {
    const body = req.body
    //if the request is missing the description field deliver a 404
    if(!body.description) return res.status(400).end()
    //make the object we are going to insert into the database
    //we get the content from body
    //the id is self generated so we don't have to make one
    //if the likes doesn't exist we will put 0
    const itemObj = new Item({
        description: body.description,
        likes: body.likes || 0
    })
    //save the new object into our database and return a CREATED status
    const savedItem = await itemObj.save()
    res.status(201).json(savedItem).end()
})
//DELETE endpoint
//we search for the object through the id and delete it from our DB
itemsRouter.delete('/:id', async (req, res) => {
    await Item.findByIdAndRemove(req.params.id)
    res.status(204).end()
})
//PUT or UPDATE endpoint
itemsRouter.put('/:id', async (req, res) => {
    const body = req.body
    //we make a new object just like with POST
    const itemObj = {
        description: body.description,
        likes: body.likes
    }
    //findAndUpdate requires the id and then the object you are inserting
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, itemObj)
    res.status(201).json(updatedItem).end()
})

export { itemsRouter }

