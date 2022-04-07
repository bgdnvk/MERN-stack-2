import supertest from 'supertest'
import { app } from '../app.js'
//use the supertest object as our API
const api = supertest(app)
//in order to use mongoose methods we need the mongoose model
import { Item } from '../models/item'

//run npm test -- -t "GET call"
//test GET or READ call on localhost:3001/api/items endpoint
test('GET call', async () => {
    await api
        .get('/api/items')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})
//run npm test -- -t "POST call"
//POST
test('POST call', async () => {
    //build a new item
    const newItem = {
        description:"sent from Jest!",
        likes: 10
    }
    //we send the item object to the DB through the API
    //we expect a successful result
    await api
        .post('/api/items')
        .send(newItem)
        .expect(201)
    //get all the items in our DB
    const items = await Item.find({})
    //let's check that the last item added was indeed newItem object
    //it should contain the description "sent from Jest!"
    expect(items[items.length-1].description).toBe("sent from Jest!")
})