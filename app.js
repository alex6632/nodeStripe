const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const front = require('./routes/front');
const api = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', front);
app.use('/api', api);

app.listen( PORT, () => console.log('Le serveur est lancé sur le port ' + PORT) );