def nome_invertido_vertical(name):
    """recebe um nome e imprime o mesmo na vertical em escada invertida"""
    for i in range(len(name)):
        list_name = list(name)
        fatiamento = list_name[0:len(name)-i]
        print(''.join(fatiamento))


print(nome_invertido_vertical('PEDRO'))

if __name__ == '__main__':
    name = input('Digite um nome: ')
    nome_invertido_vertical(name)
