from flask import Flask
from flask import render_template
from controllers.book_controller import book_controller

app = Flask(__name__)

app.static_folder = "views/static"
app.template_folder = "views/templates"


app.register_blueprint(book_controller)


@app.route('/')
def index():
    welcome_message = "Bem-vindo ao meu site!"
    return render_template('index.html', message=welcome_message)


if __name__ == '__main__':
    app.run(debug=True, port=8000)
