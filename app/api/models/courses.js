const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    course_id:{
        type:String,
        required: true
    },
    course_name:{
        type:String,
        required:true
    },
    course_description:{
        type:String,
        required:true
    }
})

// exporting schema 
module.exports = mongoose.model('courses',CourseSchema)