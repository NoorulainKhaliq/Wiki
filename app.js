'use strict'
const express = require('express')
const models = require('./models') //defaults to index 
const morgan = require('morgan')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const router = require('./routes')
var app = express()

//if we add a user we want to see it on the Page
models.User.sync({})
.then(function () {
    //returns the Page with the user we add
    return models.Page.sync({})
})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);

models.db.sync({})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);

models.db.sync({force: true})

app.engine('html',nunjucks.render)
app.set('view engine','html')
nunjucks.configure('views',{noCache: true})
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(router)