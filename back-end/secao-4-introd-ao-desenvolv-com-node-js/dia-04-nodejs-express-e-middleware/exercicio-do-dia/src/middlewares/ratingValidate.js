const ratingValidate = (req, res, next) => {
    const { description } = req.body;
    const { rating } = description;
    const isNumber = typeof rating === 'number';
    if (!isNumber || rating < 1 || rating > 5) {
        return res.status(400)
        .json({ message: 'O campo "rating" deve ser um numero inteiro de 1 à 5' });
    }
    next();
};

module.exports = ratingValidate;
