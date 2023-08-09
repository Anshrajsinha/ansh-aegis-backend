const mongoose = require('mongoose')

const CitySchema = mongoose.Schema({
    city12date: {
        type: String,
        unique: true
    },
    indigo: Number,
    airAsia: Number,
    vistara: Number,
    passengers: Number,
    routes: [String],
})

const City = mongoose.model("cities", CitySchema)

module.exports = City