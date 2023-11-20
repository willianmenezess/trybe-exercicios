from flask import Blueprint, render_template
from models.book_model import BookModel


book_controller = Blueprint('book_controller', __name__, url_prefix='/books')


@book_controller.route('/')
def get_book():
    book = BookModel("Dom Quixote", "Miguel de Cervantes", 1605)
    return render_template('book.html', book=book)
