import json
from collections import Counter
import csv


def read_books_from_file(file_path):
    '''lê arquivo json e retorna convertido para python'''
    try:
        with open(file_path, "r") as file:
            books = json.load(file)
    except FileNotFoundError:
        raise Exception(f"File {file_path} not found")
    return books


def count_books_with_categories(books):
    '''conta quantos livros tem em cada categoria'''
    categories = list()
    for book in books:
        for category in book['categories']:
            categories.append(category)
    categories_count = Counter(categories)
    return categories_count


def calculate_percentage_by_language(categories_count):
    '''calcula a porcentagem de livros por linguagem'''
    total_books = sum(categories_count.values())
    category_percentage = dict()
    for category, count in categories_count.items():
        percentage = round(count / total_books * 100, 2)
        category_percentage[category] = percentage
    return category_percentage


def write_books_to_csv(data, file_path):
    '''escreve os livros em um arquivo csv'''
    with open(file_path, 'w', encoding='utf-8') as file:
        writer = csv.writer(file)
        header = ['category', 'percentage']
        writer.writerow(header)
        for category, percentage in data.items():
            writer.writerow([category, percentage])


if __name__ == "__main__":
    # lê o arquivo json e retorna convertido para python
    books = read_books_from_file("data/books_languages.json")

    # conta quantos livros tem em cada categoria
    categories = count_books_with_categories(books)
    # print(categories)

    # calcula a porcentagem de livros por linguagem
    category_percentage = calculate_percentage_by_language(categories)
    print(category_percentage)

    # escreve os livros em um arquivo csv
    write_books_to_csv(category_percentage, 'data/books_languages.csv')
