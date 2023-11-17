from flask import Blueprint
from models.book_model import BookModel
from flask import render_template

book_controller = Blueprint('book_controller', __name__, url_prefix='/books')


@book_controller.route('/')
def book_html():
    book = BookModel("Dom Quixote", "Miguel de Cervantes", 1605)
    return render_template('book.html', book=book)
