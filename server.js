import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes.js'
import eventosRoter from './routes/eventos.routes.js'

const app = express()

app.use(express.json())
app.use(cors())

const { PORT = 2030 } = process.env


//Roters
app.use('/usuarios',userRouter)
app.use('/eventos',eventosRoter)


app.listen(PORT,(req,res)=>{

    console.clear()
    console.log( `Server en PORT: ${PORT}`)

})
