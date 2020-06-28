const express = require('express');
//const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

const books = [
	{title: 'History of Punjab', id: 1},
	{title: 'Final Asault', id: 2},
	{title: 'Sher E Punjab', id: 3}
]

//READ Request Handlers
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

//CREATE Request Handlers
app.post('/api/books', (req, res) => {
	const { error } = validateBook(req.body);
	if(error) {
		res.status(400).send(error.details[0].message)
		return;
		}
		const book = {
			id: books.length + 1,
			title: require.body.title
		};
		books.push(book);
		res.send(book);
});
