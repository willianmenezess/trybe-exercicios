/* eslint-disable no-tabs */
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

const moviesPath = path.join(__dirname, 'movies.json');

// 4.Crie uma função de leitura do JSON com o modulo fs.
const readFileMovies = async () => {
	try {
		const movies = await fs.readFile(moviesPath, 'utf-8');
		return JSON.parse(movies);
	} catch (err) {
		console.error(`O arquivo não pode ser lido: ${err}`);
	}
};

// 6.Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.
app.get('/movies', async (_req, res) => {
	try {
		const movies = await readFileMovies();
		res.status(200).json(movies);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

// 10.Crie um endpoint do tipo GET com a rota /movies/search, que possa listar todos os filmes do JSON.
// A rota deve receber a informação por query e a chave deve-se chamar q. A chave vai trazer consigo valor de ‘gente’ por exemplo, e o filtro deve trazer apenas os filmes com esse termo, se não encontrar, traga um array vazio.
// É importante que essa rota venha antes das demais que apresentam rotas dinâmicas no arquivo app.js para que funcione corretamente. Por isso, ela será a primeira rota de nosso arquivo.
// ex: http://localhost:3001/search?q=avatar

app.get('/movies/search', async (req, res) => {
	try {
		const movies = await readFileMovies();
		const { q } = req.query;
		const filteredMovies = movies.filter((movie) => movie.movie.includes(q));
		res.status(200).json(filteredMovies);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

// 5.Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.
app.get('/movies/:id', async (req, res) => {
	try {
		const movies = await readFileMovies();
		const requestedMovie = movies.find((movie) => movie.id === Number(req.params.id));
		res.status(200).json(requestedMovie);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

// 7.Crie um endpoint do tipo POST com a rota /movies, que possa adicionar um novo filme ao JSON.
app.post('/movies', async (req, res) => {
	try {
		const movies = await readFileMovies();
		const { movie, price } = req.body;
		const newMovie = { id: movies.length + 1, movie, price };
		const allMovies = JSON.stringify([...movies, newMovie]);
		await fs.writeFile(moviesPath, allMovies);
		res.status(201).json(newMovie);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

// 8.Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar um filme do JSON por id.
app.put('/movies/:id', async (req, res) => {
	try {
		const movies = await readFileMovies();
		const { id } = req.params;
		const { movie, price } = req.body;
		// buscando o index do filme que será atualizado
		const movieIndex = movies.findIndex((moviee) => moviee.id === Number(id));
		const updatedMovie = { id: Number(id), movie, price };
		// atualizando o filme de acordo com o index que foi encontrado
		movies[movieIndex] = updatedMovie;
		const allMovies = JSON.stringify(movies);
		await fs.writeFile(moviesPath, allMovies);
		res.status(200).json(updatedMovie);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

// 9.Crie um endpoint do tipo DELETE com a rota /movies/:id, que possa deletar um filme do JSON por id.
app.delete('/movies/:id', async (req, res) => {
	try {
		const movies = await readFileMovies();
		const { id } = req.params;
		// filtrando os filmes que não possuem o id que será deletado. Poderia usar o findIndex também
		// para encontrar o index do filme a ser deletado e então usar o splice para remover o filme do array
		const updatedMovies = movies.filter((movie) => movie.id !== Number(id));
		const allMovies = JSON.stringify(updatedMovies);
		await fs.writeFile(moviesPath, allMovies);
		// a resposta é um array com os filmes que sobraram. Se a resposta fosse apenas o filme deletado, que em delete n é assim - mas no put é - , seria melhor usar o findIndex.
		res.status(204).json(updatedMovies);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

module.exports = app;