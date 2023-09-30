const express = require('express');

const router = express.Router();

//app.set('view engine', 'ejs');
//GET /stories:

router.get('/main', (req, res) => {
    res.render('index')
});

router.get('/newConnection', (req, res) => {
    res.render('newConnection')
});

router.get('/connections', (req, res) => {
    fs.readFile("./events.json", "utf8", (err, data) => {
        if(err){
            console.log(err);
            res.statusCode(500);
            
        }else{
            const listOfConnections = JSON.parse(data);      
            res.render('connections',{listOfConnections});
        }
    })
})