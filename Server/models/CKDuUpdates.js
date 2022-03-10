//user data entry (class and functions)
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
//require('mongoose-double')(mongoose);

//------------------------------------------------------------------------------------------------------------
var ckduUpdatesSchema = new Schema({

    Date: {
        type: Date,
        require: true
    },
    Location: {
        type: String,
        require: true
    },
    
    Infected:{
        type:Number,
       require:true

    },
   Recovered: {
        type:Number,
        require: true
    },
   Deaths:{
        type: Number,
        require: true

    },
   
})

module.exports = mongoose.model('covid_updates', ckduUpdatesSchema)

