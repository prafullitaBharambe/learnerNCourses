const express = require('express')
// for logging
const logger = require('morgan')
// middlewear handle the request
const bodyParser = require('body-parser')
const app = express()

const learnerRoute = require('./app/api/routes/learners')
const courseRoute = require('./app/api/routes/courses')


const port = process.env.PORT||5000;

const mongoose = require('mongoose')

require('dotenv').config();
//for verifying json web token
const jwt = require('jsonwebtoken')
// setting secret key 
app.set('secretKey','hdjsakfhdjsk');

//const secretKey = process.env.SECRET_KEY || "ajkshdkjadkjaks";

// function for validation of user credentials
const userValidation = (req, res,next) => {
    jwt.verify(req.headers['x-access-token'], app.get('secretKey'), 
    (err,decoded) =>{
        if(err){
            res.json({
                message: err
            })
        }
        next()
    })
}


app.use(logger('dev'))
app.use(bodyParser.json())
// importing routes for user and movie 
app.use('/learner',learnerRoute)

app.use('/courses',userValidation,courseRoute)

// homepage request
app.get('/', (req,res) => {
    res.json({
        "APP": "JWT Based API Application",
        "message": "Successfully Running the Application"
    })
})
//const mongoURI =process.env.MONGODB_URL
const mongoURI = "mongodb+srv://prafullitaPatil:urvee@cluster0.hcla2ac.mongodb.net/?retryWrites=true&w=majority"
//connecting to mongodb
mongoose.connect(mongoURI)
.then(() => {
    console.log("Successfully Connected to the Database")
})
.catch((err) => {
    console.log(err)
})

// 
app.listen(port || 80,() => {
    console.log("Successfully Running on the PORT: 5000")
})