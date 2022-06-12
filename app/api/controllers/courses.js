const CourseModel = require('../models/courses')

// Create
const createCourse = async (req,res,next) => {
    let {course_id,course_name,course_description} = req.body
    await CourseModel.create({
        course_id,
        course_name,
        course_description
       
    }, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Added Course Successfully",
            data: result
        })
    })
}

// Read
const readAllCourse = (req,res,next) => {
    CourseModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved all the Course",
            data:{
                course: result
            }
        })
    })
} 

// Read By Id
const readCourseById = (req,res,next) => {
    CourseModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved Course By ID",
            data:{
                course: result
            }
        })
    })
} 

//
const readCourseByName = (req,res,next) => {
    CourseModel.findById(req.params.course_name, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved Course By Name",
            data:{
                course: result
            }
        })
    })
} 


// Update By Id
const updateCourseById = (req,res,next) => {
    CourseModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated course By ID",
            data:{
                course: result
            }
        })
    })
} 

// Delete Course By Id
const deleteCourseById = (req,res,next) => {
  CourseModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted course By ID",
            data:{
                course: result
            }
        })
    })
} 

module.exports = {createCourse, readAllCourse, readCourseById, readCourseByName,updateCourseById, deleteCourseById}