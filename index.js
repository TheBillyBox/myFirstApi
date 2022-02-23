const express = require('express');
const app = express();
require('dotenv').config();
const connect = require('./database/connect');

connect.createConnection();
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
const myFirstController = require('./controllers/myFirstController')

app.get('/', myFirstController.helloWorld)
app.get('/alumnes', myFirstController.alumnes)

app.use('/api/v1/user', require('./routes/userRoutes'))
app.use('/api/v1/film', require('./routes/filmRoutes'))
app.use('/api/v1/auth', require('./routes/authRoutes'))
app.use('/api/v1/fetch', require('./routes/fetchRoutes'))
app.listen(process.env.PORT || 3000, () =>{
    console.log('My Frist API running!')
})

//!  Si nodemon falla "Set-ExecutionPolicy unrestricted" en la PowerShell