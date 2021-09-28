const express = require('express');
const app = express();

const myFirstController = require('./controllers/myFirstController')

app.get('/', myFirstController.helloWorld)

app.listen(3000, () =>{
    console.log('My Frist API running!')
})

//!  Si nodemon falla Set-ExecutionPolicy unrestricted