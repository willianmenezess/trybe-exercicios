class Livro():
    def __init__(self, titulo: str, autor: str, paginas: int) -> None:
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def description(self) -> str:
        return f"{self.titulo}, de {self.autor}, tem {self.paginas} páginas."


if __name__ == "__main__":
    book1 = Livro("Cabeça Fria, Coração Quente", "Abel Ferreira", 250)
    print(book1.description())
