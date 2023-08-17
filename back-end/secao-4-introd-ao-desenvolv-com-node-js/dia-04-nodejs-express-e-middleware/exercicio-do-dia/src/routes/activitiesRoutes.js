/* eslint-disable no-tabs */
const express = require('express');

const route = express.Router();

const nameValidate = require('../middlewares/nameValidate');
const priceValidate = require('../middlewares/priceValidate');
const descriptionValidate = require('../middlewares/descriptionValidate');
const createdAtValidate = require('../middlewares/createdAtValidate');
const ratingValidate = require('../middlewares/ratingValidate');
const difficultyValidade = require('../middlewares/difficultyValidade');

route.post('/activities', nameValidate, priceValidate, descriptionValidate,
createdAtValidate, ratingValidate, difficultyValidade, (_req, res) => {
	console.log('último middleware');
	return res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = route;
