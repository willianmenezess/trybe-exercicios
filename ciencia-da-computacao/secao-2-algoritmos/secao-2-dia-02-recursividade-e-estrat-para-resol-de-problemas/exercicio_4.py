# Algoritmo recursivo p/ encontrar o máx divisor comum (mdc) de dois inteiros.
# mdc é p máximo valor que divide ambos, ou seja, o resto será zero
def mdc(a, b):
    # condicao de parada
    if b == 0:
        return a
    # recursividade
    return mdc(b, a % b)
