//user data entry (class and functions)
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')

//------------------------------------------------------------------------------------------------------------
var gpsSchema = new Schema({
    datetime: {
        type: Date,
        require: true
    },
  lat: {
        type: String,
        require: true
    },
   lon:{
        type: String,
        require: true

    },
    covidStatus:{
        type:Date,
       require:true

    },
    restrictionLevel:{
        type:String,
        require:true
        
    }
})



module.exports = mongoose.model('gps_dataset', gpsSchema)

