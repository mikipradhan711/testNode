const express = require('express');   
const App = express();       
const Puser = require('./routes/userRoutes');    
const dbconnection = require('./connection/userConnection');        

           
   
 /* App.get('/test', (req, res) => {
     return res.send({ responseCode: 200, responseMessage: "Hii this is testing api for 1020 port." })
 })  */ 

App.use(express.json({ limit: '16mb' }));
App.use('/Puser',Puser); 
App.listen(1020,() => {                           
    console.log("Server is running at 1020")
})


