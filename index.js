const express = require('express');
const app = express();

const myFirstController = require('./controllers/myFirstController')

app.get('/', myFirstController.helloWorld)
app.get('/alumnes', myFirstController.alumnes)

app.listen(process.env.PORT || 3000, () =>{
    console.log('My Frist API running!')
})

//!  Si nodemon falla Set-ExecutionPolicy unrestricted en la PowerShell