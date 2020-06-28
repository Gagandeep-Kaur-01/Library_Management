
const express = require('express');
//const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

const books = [
	{title: 'History of Punjab', id: 1},
	{title: 'Final Asault', id: 2},
	{title: 'Sher E Punjab', id: 3}
]


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

app.listen(8080);
console.log('Open local host: 8080')