# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def forma_combinacoes(produtos: list) -> int:  # Complexidade O(n^2)
    combinacoes = []
    for i, prod_atual in enumerate(produtos):
        for j, prod in enumerate(produtos[i + 1:]):
            if prod_atual == prod:
                combinacoes.append((i, j))
    # print(combinacoes)
    return len(combinacoes)


if __name__ == "__main__":
    print(forma_combinacoes([1, 3, 1, 1, 2, 3]))
    print(forma_combinacoes([1, 1, 2, 3]))
