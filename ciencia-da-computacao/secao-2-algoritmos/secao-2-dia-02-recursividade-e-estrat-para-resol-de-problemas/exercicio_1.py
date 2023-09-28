# algoritmo não recursivo
def count_pair_numbers(number: int) -> int:
    """
    Recebe o ultimo elemento da lista e retorna a quantidade de números pares.
    """
    pair_numbers = [numb for numb in range(1, number) if numb % 2 == 0]
    return len(pair_numbers)


if __name__ == "__main__":
    print(count_pair_numbers(10))
