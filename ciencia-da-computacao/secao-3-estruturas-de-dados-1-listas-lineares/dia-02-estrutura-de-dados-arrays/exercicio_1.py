# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4

def calcula_estabilidade(valores_coletados: list) -> int:  # Complexidade O(n)
    cont = 0
    cont_max = 0
    for valor in valores_coletados:
        if valor == 1:
            cont += 1
            if cont > cont_max:
                cont_max = cont
        else:
            cont = 0
    return cont_max


if __name__ == "__main__":
    print(calcula_estabilidade([1, 1, 1, 0, 0, 1, 1]))
    print(calcula_estabilidade([1, 1, 1, 1, 0, 0, 1, 1]))
