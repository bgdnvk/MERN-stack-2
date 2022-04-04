import { Router } from "express"
import { Item } from "../models/item.js"

const itemsRouter = Router()

itemsRouter.get('/', async (req, res) => {
    const items = await Item.find({})
    res.json(items).end()
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

export { itemsRouter }

