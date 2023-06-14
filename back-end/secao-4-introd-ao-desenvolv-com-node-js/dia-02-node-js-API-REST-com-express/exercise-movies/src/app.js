/* eslint-disable no-tabs */
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

const moviesPath = path.join(__dirname, 'movies.json');

const readFileMovies = async () => {
	try {
		const movies = await fs.readFile(moviesPath, 'utf-8');
		return JSON.parse(movies);
	} catch (err) {
		console.error(`O arquivo não pode ser lido: ${err}`);
	}
};

app.get('/movies', async (_req, res) => {
	try {
		const movies = await readFileMovies();
		res.status(200).json(movies);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

app.get('/movies/:id', async (req, res) => {
	try {
		const movies = await readFileMovies();
		const requestedMovie = movies.find((movie) => movie.id === Number(req.params.id));
		res.status(200).json(requestedMovie);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

module.exports = app;