import supertest from 'supertest'
import { app } from '../app.js'
//use the supertest object as our API
const api = supertest(app)

import { Item } from '../models/item'

//run npm test -- -t "GET call"
//test GET or READ call on localhost:3001/api/items endpoint
test('GET call', async () => {
    await api
        .get('/api/items')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})