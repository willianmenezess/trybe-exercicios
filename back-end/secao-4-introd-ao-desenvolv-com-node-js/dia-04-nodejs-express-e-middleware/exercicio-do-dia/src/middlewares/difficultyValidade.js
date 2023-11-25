/* eslint-disable no-tabs */
const difficultyValidade = (req, res, next) => {
  const { description } = req.body;
	const { difficulty } = description;
	const isString = typeof difficulty === 'string';
	if (isString && (difficulty === 'Fácil' 
	|| difficulty === 'Médio' || difficulty === 'Difícil')) {
		return next();
	}
	return res.status(400).json({ message: 
		'O campo "difficulty" deve ser : "Fácil", "Médio" ou "Difícil"' });
};

module.exports = difficultyValidade;
