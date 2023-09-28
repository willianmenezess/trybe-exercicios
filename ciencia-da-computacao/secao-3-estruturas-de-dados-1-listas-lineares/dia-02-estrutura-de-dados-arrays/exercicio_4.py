# entradas = [1, 2, 3]
# saidas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.

def alunos_na_biblioteca(entradas: list, saidas: list, instante: int) -> int:
    cont = 0
    for i, entrada in enumerate(entradas):
        if entrada <= instante <= saidas[i]:
            cont += 1
    return cont


if __name__ == "__main__":
    print(alunos_na_biblioteca([1, 2, 3], [3, 2, 7], 4))
    print(alunos_na_biblioteca([1, 2, 3], [3, 2, 7], 2))

# Complexidade O(n)
