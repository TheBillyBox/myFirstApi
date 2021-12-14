const express = require('express');
require('dotenv').config()
const app = express();
//*Mongoose
const connect = require('./database/connect')
connect.createConnection();
const myFirstController = require('./controllers/myFirstController')

app.get('/', myFirstController.helloWorld)
app.get('/alumnes', myFirstController.alumnes)

app.use('/api/v1/user', require('./routes/userRoutes'))
app.listen(process.env.PORT || 3000, () =>{
    console.log('My Frist API running!')
})

//!  Si nodemon falla "Set-ExecutionPolicy unrestricted" en la PowerShell