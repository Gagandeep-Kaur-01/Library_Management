

const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const multer = require('multer');
var upload = multer();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(upload.array());

var mod = require('./module/module');
var route = express.Router();
//app.use('/module', module);

app.get('/', (req,res) => {
	res.send("Welcome to my Library!!!!!!");
});

app.get('/api/books', (req,res) => {
	res.send(books);
});

app.get('/api/books/:id', (req,res) => {
     const book = books.find(c => c.id == parseInt(req.param.id));
	 if(!book) res.status(404).send('<h2 style="font-family"Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
	 res.send(book);
});

app.listen(8080);
console.log('Open local host: 8080');