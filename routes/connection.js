const model = require ('../models/events');
const express = require('express');
const fs = require('fs');
const router = express.Router();
//app.use(express.static('../public'));
//app.set('view engine', 'ejs');

router.get('/newConnection', (req, res) => {
    res.render('./show/newConnection')
});

router.get('/connections', (req, res) => {


    let connections= model.find();
    res.render('./show/connections',{connections});
    
});
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    let connection= model.findById(id);
    if(connection){
    res.render('./show/connection',{connection});
    }
    else{
        let err= new Error('Cannot find connection with id '+id);
        err.status=404;
        next(err);
        //res.status(404).send('Cannot find story with id '+id);
    }
  
});
router.get('/:id/edit',(req,res)=>{
    let id= req.params.id;
    let connection= model.findById(id);
    if(connection){
    res.render('./show/edit',{connection});
    }
    else{
        let err= new Error('Cannot find story with id '+id);
        err.status=404;
        next(err);
        //res.status(404).send('Cannot find story with id '+id);
    }
});
router.put('/:id',(req, res, next)=>{
    //res.send("hello...");
    let connection= req.body;
    console.log("connection");
    let id= req.params.id;
    if(model.updateById(id,connection)){
        res.redirect('/connection/'+id);
    }
    else{
        let err= new Error('Cannot find story with id '+id);
        err.status=404;
        next(err);
        //res.status(404).send('Cannot find story with id '+id);
    }
});
router.post('/',(req, res)=>{
    let connection=req.body;
    model.save(connection);
    res.redirect('/connection/'+connection.id);
});
router.delete('/:id',(req,res)=>{
    let id=req.params.id;
    if(model.deleteById(id)){
        //console.log(model.deleteById(id));
        res.redirect('/connection/connections');
    }
    else{
        let err= new Error('Cannot find story with id '+id);
        err.status=404;
        next(err);
        //res.status(404).send('Cannot find story with id '+id);
    }
});
module.exports=router;