const express = require('express');
const path = require('path')
const bodyParser = require('body-parser'); //Input HTML
const app = express();
const cors = require('cors')

//
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src/views'));

//
app.use("/",require('./src/controller/logController'))
app.use(cors())
app.listen('8080');
