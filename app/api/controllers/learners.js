const LearnerModel = require('../models/learners')
// bcrypt for password encryption
const bcrypt = require('bcrypt')
// jwt for generating jsonwebtoken
const jwt = require('jsonwebtoken')

// Creating learner (function for user creation:post request)
const create = (req,res,next) => {
    const {name,email,password} = req.body

    LearnerModel.create({
        name,
        email,
        password
    }, (err,result) => {
        if(err)
        next(err)
        else
        res.status(200).json({
            status: "Success",
            message: "Learner Added Successfully",
            data: result
        })
    })
} 

// function for login ,creating jwt token and compare password from request body and database
const login = (req,res,next) => {
    LearnerModel.findOne({learner_email:req.body.learner_email}, (err,result) => {
        if(err){
            next(err)
        }
        else{
            if(bcrypt.compare(req.body.password, result.password)){
                const token = jwt.sign({id:result._id},req.app.get('secretKey'), {expiresIn:'1h'})
                res.json({
                    status:"Success",
                    message:"Successfully Logged in",
                    data: {
                        learner: result,
                        token: token
                    }
                })
            }
        }
    })
}

// exporting functions
module.exports = {create, login}