const express = require('express');
const fs = require('fs');

const app = express();

const mainRoute= require('./routes/main');
const connectionRoute= require('./routes/connection');

// set the view engine to ejs
app.set('view engine', 'ejs');

// enabling styles/images to be served from public
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/main',mainRoute);
app.use('/connection',connectionRoute);

// app.get('/newConnection', (req, res) => {
//     res.render('newConnection')
// });

// app.get('/connections', (req, res) => {
//     fs.readFile("./events.json", "utf8", (err, data) => {
//         if(err){
//             console.log(err);
//             res.statusCode(500);
            
//         }else{
//             const listOfConnections = JSON.parse(data);      
//             res.render('connections',{listOfConnections});
//         }
//     })
// })

// app.get('/connection/:id', (req, res) => {
//     const id = req.params.id;

//     fs.readFile("./events.json", "utf8", (err, data) => {
//         if(err){
//             console.log(err);
//             res.statusCode(500);
            
//         }else{
//             const listOfConnections = JSON.parse(data);      
//             let currConnection;
//             let found = false;
//             for(const category in listOfConnections){
//                 if(found === true){
//                     break;
//                 }
//                 for(const connection of listOfConnections[category]){
//                     if(connection.id === id){
//                         currConnection = connection;
//                         found = true;
//                         break;
//                     }
//                 }
//             }
//             res.render('connection',{connection:currConnection});
//         }
//     })
// })

app.listen(3000,() => {
    console.log('Listening on port 3000');

});
