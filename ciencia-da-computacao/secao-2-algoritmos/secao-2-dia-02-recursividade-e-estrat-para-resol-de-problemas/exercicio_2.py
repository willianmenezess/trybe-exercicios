# transformando algoritmo do exercicio 1 em recursivo
def count_pair_numbers(number: int) -> int:
    """
    Recebe o ultimo elemento da lista e retorna a quantidade de números pares.
    """
    if number == 1:
        return 0
    if number % 2 == 0:
        return 1 + count_pair_numbers(number - 1)
    else:
        return count_pair_numbers(number - 1)


if __name__ == "__main__":
    print(count_pair_numbers(9))
