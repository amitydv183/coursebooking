const express = require('express')
const Contactcontroller = require('../controller/contactController')
const teachercontroller = require('../controller/teacherController')
const CourseController = require('../controller/CourseController')
const userController = require('../controller/UserController')
const checkAuth = require('../middleware/auth')

const router = express.Router()


router.get('/contact',Contactcontroller.display)
router.post('/create',Contactcontroller.create)
router.get('/view/:id',Contactcontroller.view)
router.put('/update/:id',Contactcontroller.update)
router.delete('/delete/:id',Contactcontroller.delete)
 
// course api

router.get('/course',CourseController.display)
router.post('/course/create',CourseController.create)
router.get('/course/view/:id',CourseController.view)
router.put('/course/update/:id',CourseController.update)
router.delete('/course/delete/:id',CourseController.delete)

//te
router.get('/teacher',teachercontroller.display)
router.get('/viewteacher/:id',teachercontroller.view)
router.post('/createteacher',teachercontroller.create)
router.post('/updateteacher/:id',teachercontroller.update)

//user
router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/profile',checkAuth,userController.profile)
router.get('/logout',userController.logout)
module.exports =router