const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const cityRouter = require('./routes/CityRoute')
const userRouter = require('./routes/UserRoute')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/city', cityRouter)
app.use('/auth', userRouter)

async function connect() {
    try {
    await mongoose.connect(process.env.MONGO_STR, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("DATABASE connection successful")
    })
        } catch (error) {
            console.log("FAILED to connect to database")
        }
    }    
connect()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}....`)
})







/// password   =   plCraEh4SuJzkmjz
///  username = ansh

//  mongodb+srv://ansh:<password>@cluster0.yeeo47n.mongodb.net/