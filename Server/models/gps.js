//user data entry (class and functions)
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
//require('mongoose-double')(mongoose);

//------------------------------------------------------------------------------------------------------------
var gpsSchema = new Schema({
    covidStatus:{
        type:Number,
       require:true

    },
    datetime: {
        type: Date,
        require: true
    },
  lat: {
        type:Number,
        require: true
    },
   lon:{
        type: Number,
        require: true

    },
   
    restrictionLevel:{
        type:Number,
        require:true
        
    },
    unique_id
    : {
        type:Number,
        require: true
    },
})



module.exports = mongoose.model('gps_dataset', gpsSchema)

