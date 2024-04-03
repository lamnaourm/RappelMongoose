import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import Myroutes from './routes/myroutes.js'
import RoutesActor from './routes/actor.js'

dotenv.config()

const port = process.env.port || 3000
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.url).then(() => {
    console.log('Connected to Mongo')
}).catch((err) => {
    console.log('not Connected to Mongo')
})

app.use('/test', Myroutes)
app.use('/actor', RoutesActor)

app.listen(port, (err) => {
    if(err)
        console.log('Unable to start server at ' + port)
    else
        console.log('server started at ' + port)

})