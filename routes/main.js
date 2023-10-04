const express = require('express');
const mainController= require('../controllers/main');
const router = express.Router();

//app.set('view engine', 'ejs');

//GET 
router.get('/about',mainController.about);
router.get('/contact',mainController.contact);



module.exports=router;