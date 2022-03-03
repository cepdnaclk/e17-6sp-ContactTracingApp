//actions
//add data to db
var User = require('../models/user')
var gpsSchema=require('../models/gps')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig');
const { exists } = require('../models/user');

var functions = {
    addNew: function (req, res) {
        if ( ((req.body.password)== null) || ((req.body.email)== null)) { // it these fields are missing
            console.log(typeof(req.body.email));
            res.json({success: false, msg: 'Enter all fields'}) //display a message
        }
        else {
            var newUser = User({ //add data to json
                email:req.body.email,
                password: req.body.password,
                //Location:req.body.Location,
                //DateOfBirth: req.body.DateOfBirth,
            });
            newUser.save(function (err, newUser) { //save in database
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
    },
    update: function (req, res){
        console.log(req.params.username);
        User.findOneAndUpdate(
            { name: req.params.username },
            { $set: { password: req.body.password } },
            {useFindAndModify: false , new:true},
            (err, result) => {
              if (err) {
                  return res.status(500).json({ msg: err });
                  //errors.noresult= "No match"
                  //res.json(errors)
                }
              if(result==null){
                return res.json({success: false, msg: 'No user with that name'})
              }
              
              console.log(result)
              res.json({success: true, msg: 'Successfully changed'})
             
            }
          );
    },
    check: function(req,res) {
       User.findOne({name:req.params.username},(err,result)=>{
           if (err) return res.status(500).json({ msg: err });
           if(result!==null){
               return res.json({
                   Status: true,
                   msg : "Username already exists!",
               });
           }
           else return res.json({
               Status: false,
               msg: "Username is okay"
           })
       }); 
    },
    delete: function(req,res) {
        console.log(req.params.username);
        User.findOneAndDelete(
            { name: req.params.username },
           // { $set: { password: req.body.password } },
           //  {useFindAndModify: false },
            (err, result) => {
              if (err) {
                  return res.status(500).json({ msg: err });
                  //errors.noresult= "No match"
                  //res.json(errors)
                }
              if(result==null){
                return res.json({success: false, msg: 'No user with that name'})
              }
              
              console.log(result)
              res.json({success: true, msg: 'Successfully changed'})
             
            }
          );
        
    },
    authenticate: function (req, res) {
        User.findOne({ //find user name  ---  "User" is a object from user.js
            email: req.body.email
        }, function (err, user) {
                if (err) throw err
                if (!user) { //error code user not found
                    res.status(403).send({success: false, msg: 'Authentication Failed, User not found'})//error code from backend
                }

                else {
                    user.comparePassword(req.body.password, function (err, isMatch) {
                        if (isMatch && !err) {
                            // const token = jwt.encode({username: username,expire: Date.now() + (1000 * 60 * 60) //1 hour }, tokenSecret);
                            var token = jwt.encode(user, config.secret)
                            res.json({success: true, token: token})
                        }
                        else {
                            return res.status(403).send({success: false, msg: 'Authentication failed, wrong password'})
                        }
                    })
                }
        }
        )
    },
    //get info of user to display
    getinfo: function (req, res) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            
            var token = req.headers.authorization.split(' ')[1] //extract token from header
            var decodedtoken = jwt.decode(token, config.secret) //decode token
            return res.json({success: true, msg: 'Hello ' + decodedtoken.email,data:decodedtoken}) //with theuse of token--> display hello userb
        }
        else {
            return res.json({success: false, msg: 'No Headers'})
        }
    },

    getallLocations:function(req,res){
      gpsSchema.find().select("lat lon")
        
        .then((locations)=>{
           res.status(200).json({Alllocations:locations})
       })
       .catch(err=>console.log(err));
   }
}

module.exports = functions // to use in elsewhere

//$2b$10$5mdH/gADIKXl5bRz.n4r2epalQeAsFXYth0X2tw4nbAo3Upmp0LGW
//$2b$10$5mdH/gADIKXl5bRz.n4r2epalQeAsFXYth0X2tw4nbAo3Upmp0LGW
//$2b$10$5mdH/gADIKXl5bRz.n4r2epalQeAsFXYth0X2tw4nbAo3Upmp0LGW

//$2b$10$bs91sMH217UPPSP2msBJIuWChmKpJPPoVf.UACkY7Nkq3Muo.3wgC
//$2b$10$rcfZh6qTcP/SjvRBsDA4VODIC.frXdpTWqSJMv0jpARxBUqVJGgce