from flask import Blueprint, render_template
from models.film_model import FilmModel


film_controller = Blueprint('film_controller', __name__, url_prefix='/films')


@film_controller.route('/')
def get_films():
    data: list[dict] = [
        {
            "title": "The Godfather",
            "year": 1972
        },
        {
            "title": "The Shawshank Redemption",
            "year": 1994
        },
        {
            "title": "Schindler's List",
            "year": 1993
        },
    ]
    films = FilmModel(data)
    return render_template('films.html', films=films)
