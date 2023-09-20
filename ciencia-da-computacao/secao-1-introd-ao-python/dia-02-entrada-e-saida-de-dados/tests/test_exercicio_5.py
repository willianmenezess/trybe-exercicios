from src.exercicio_5 import fizzbuzz


def test_fizzbuzz_should_return_list_of_numbers():
    assert fizzbuzz(2) == [1, 2]


def test_fizzbuzz_divisible_by_three_should_be_fizz():
    assert fizzbuzz(3)[-1] == "Fizz"


def test_fizzbuzz_divisible_by_five_should_be_buzz():
    assert fizzbuzz(5)[-1] == "Buzz"


def test_fizzbuzz_divisible_by_five_and_three_should_be_fizzbuzz():
    assert fizzbuzz(15)[-1] == "FizzBuzz"

# criando ambiente virtual: python3 -m venv .venv
# ativando ambiente virtual: source .venv/bin/activate
# instalando dependências: pip install -r requirements.txt (se tiver)
# rodando o teste: python3 -m pytest

# desativando ambiente virtual: deactivate
# removendo ambiente virtual: rm -rf .venv

# verifica as dependências instaladas: pip freeze

# pega as dependências instaladas e coloca no requirements.txt:
# pip freeze > requirements.txt

# removendo dependências:
# pip uninstall -r requirements.txt -y (remove as depend. do requirements.txt)
