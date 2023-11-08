# classe de conjunto criada com vetores, o set é um vetor (array) de booleanos

class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        '''retorno: True, caso o elemento faça parte.
        False, caso o elemento não faça parte.'''
        return self.set[item]

    def union(self, conjunto_b):
        '''retorno: outro objeto Conjunto com união
        do próprio objeto com o conjunto_b'''
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjunto_b):
        '''retorno: outro objeto Conjunto com intersecção
        do próprio objeto com o conjunto_b'''
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto


if __name__ == "__main__":
    conj1 = Conjunto()

    for item in [0, 10, 100, 1000]:
        conj1.add(item)
    print(conj1)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)
    print(1 in conj2)
    print(0 in conj2)

    conj3 = conj1.union(conj2)
    print(conj3)

    conj4 = conj1.intersection(conj2)
    print(conj4)
