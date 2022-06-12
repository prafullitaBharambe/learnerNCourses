


const express = require('express')
const router = express.Router()
const courseController = require('../controllers/courses')

// Create
router.post('/create',courseController.createCourse)
// Read
router.get('/getAllCourse',courseController.readAllCourse)
// Read By Id
router.get('/getCourseById/:course_id',courseController.readCourseById)
// Read By Name
router.get('/getCourseByName/:course_name',courseController.readCourseByName)
// Update By Id
router.put('/updateCourseById/:course_id',courseController.updateCourseById)
// Delete By Id
router.delete('/deleteCourseById/:course_id',courseController.deleteCourseById)

module.exports = router