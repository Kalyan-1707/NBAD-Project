const express = require('express');
const fs = require('fs');
const methodOverride= require('method-override');
const morgan = require('morgan');
const app = express();

const mainRoute= require('./routes/main');
const connectionRoute= require('./routes/connection');

// set the view engine to ejs
app.set('view engine', 'ejs');

// enabling styles/images to be served from public
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/main',mainRoute);
app.use('/connection',connectionRoute);

app.use((req, res, next)=>{
    let err = new Error('The server cannot locate '+req.url);
    err.status=404;
    next(err);
});
app.use((err,req,res,next)=>{
    if(!err.status){
        err.status=500;
        err.message= ("Internal Server Error");
    }
    res.status(err.status);
    res.render('error',{error: err});
});
app.listen(8084,() => {
    console.log('Listening on port 8084');

});
