import { Router } from "express"
import { Item } from "../models/item.js"

const itemsRouter = Router()

itemsRouter.get('/', async (req, res) => {
    const items = await Item.find({})
    res.json(items)
})

export { itemsRouter }

