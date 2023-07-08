const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
		author: DataTypes.STRING,
		pageQuantity: DataTypes.INTEGER,
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE,
  },
	{
		underscored: true,
		tableName: 'Books',
		timestamps: true,
	}
	);
  
  return Book;
  };
  
module.exports = BookModel;