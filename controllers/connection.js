const model = require ('../models/events');
//app.use(express.static('../public'));
//app.set('view engine', 'ejs');

exports.newConnection= (req, res) => {
    res.render('./show/newConnection')
};

exports.connection= (req, res) => {


    let connections= model.find();
    res.render('./show/connections',{connections});
    
};
exports.show=(req, res, next) => {
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
  
};
exports.edit=(req,res)=>{
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
};
exports.update=(req, res, next)=>{
    //res.send("hello...");
    let connection= req.body;
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
};
exports.create=(req, res)=>{
    let connection=req.body;
    model.save(connection);
    res.redirect('/connection/'+connection.id);
};
exports.remove=(req,res)=>{
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
};