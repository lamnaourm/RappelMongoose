import express from "express"

const routes = express.Router()

routes.get('/test', (req, res) => {
    res.status(201).send('GET - OK.....')
})

routes.post('/test', (req, res) => {
    res.send('POST - OK.....')
})

routes.delete('/test', (req, res) => {
    res.send('DELETE - OK.....')
})

export default routes