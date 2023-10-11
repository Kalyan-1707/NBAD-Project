const express = require('express');
const mainController= require('../controllers/main');
const router = express.Router();



//GET 
router.get('/', mainController.index);
router.get('/about',mainController.about);
router.get('/contact',mainController.contact);



module.exports=router;