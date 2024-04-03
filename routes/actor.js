import express from 'express'
import actorModel from '../models/ActorModel.js'

const routes = express.Router()


routes.get('/all', (req,res) => {
    actorModel.find({}).then((actors) => {
        res.status(202).json(actors)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.post('/new', (req, res) => {
    const actor = req.body; 

    actorModel.create(actor).then((a) => {
        res.status(201).json(a)
    }).catch((err) => {
        res.status(510).send('error')
    })
})


export default routes

