
const express = require('express');

const router = express.Router();

//app.set('view engine', 'ejs');
router.get('/:id', (req, res) => {
    const id = req.params.id;

    fs.readFile("./events.json", "utf8", (err, data) => {
        if(err){
            console.log(err);
            res.statusCode(500);
            
        }else{
            const listOfConnections = JSON.parse(data);      
            let currConnection;
            let found = false;
            for(const category in listOfConnections){
                if(found === true){
                    break;
                }
                for(const connection of listOfConnections[category]){
                    if(connection.id === id){
                        currConnection = connection;
                        found = true;
                        break;
                    }
                }
            }
            res.render('connection',{connection:currConnection});
        }
    })
})