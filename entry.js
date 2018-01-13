//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//assign express routing
var app = express();

const route = require('./route/routes');
const suggestStocksRoutes = require('./route/suggestStocksRoutes');

//connect to Mongo
mongoose.connect('mongodb://127.0.0.1:27017/');

mongoose.connection.on('connected', () => {
    console.log('Mongo DB connected at port 27017');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

//Assign a port for listening to request/response
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Application has been started');
});

//Add the middleware

//Add the CORS support
app.use(cors());

//Add body parser
app.use(bodyParser.json());

//Add the route. Ex: Context path with /api
app.use('/api', route);
app.use('/api/mockStock', suggestStocksRoutes);

//Add the route and send the response for the route
app.get('/', (req, res) => {
    res.send('Hohohohoho... Finally you made it!!!!');
});