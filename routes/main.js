const express = require('express');
const fs = require('fs');
const router = express.Router();
const app = express();
//app.set('view engine', 'ejs');
app.use(express.static('../NBAD-Project/public'));
//GET 


router.get('/newConnection', (req, res) => {
    res.render('newConnection')
});

router.get('/connections', (req, res) => {
    fs.readFile("../NBAD-Project/events.json", "utf8", (err, data) => {
        if(err){
            console.log(err);
            res.statusCode(500);
            
        }else{
            const listOfConnections = JSON.parse(data);      
            res.render('connections',{listOfConnections});
        }
    })
})

module.exports=router;