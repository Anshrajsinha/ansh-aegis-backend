const express = require('express')
const City = require('../models/CityModel')

const router = express.Router()

router.post("/create", async (req, res) => {
    try {
        const { city12date, indigo, airAsia, vistara, passengers, routes } = req.body
        const newPost = await City.create({
            city12date, indigo, airAsia, vistara, passengers, routes
        })
        res.json(newPost)
    }
    catch(err) {
        res.json({message: err})
    }
})
router.get("/show/:id", async (req, res) => {
    try {
        const { id } = req.params
        const flight = await City.find({city12date: id})
        res.json(flight)
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router