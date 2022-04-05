import { Router } from "express"
import { Item } from "../models/item.js"

const itemsRouter = Router()

itemsRouter.get('/', async (req, res) => {
    const items = await Item.find({})
    res.status(200).json(items).end()
})

itemsRouter.get('/:id', async (req, res) => {
    const item = await Item.findById(req.params.id)

    if(item){
        res.status(200).json(item).end()
    } else{
        res.status(404).end
    }
})

itemsRouter.post('/', async (req, res) => {
    const body = req.body

    if(!body.description) return res.status(400).end()

    const itemObj = new Item({
        description: body.description,
        likes: body.likes || 0
    })

    const savedItem = await itemObj.save()
    res.status(201).json(savedItem).end()
})

itemsRouter.delete('/:id', async (req, res) => {
    await Item.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

itemsRouter.put('/:id', async (req, res) => {
    const body = req.body

    const itemObj = {
        description: body.description,
        likes: body.likes
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, itemObj)
    res.status(201).json(updatedItem).end()
})

export { itemsRouter }

