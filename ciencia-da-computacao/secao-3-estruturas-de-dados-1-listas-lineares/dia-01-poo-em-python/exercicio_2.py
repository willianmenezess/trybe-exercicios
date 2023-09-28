class Estatistica:
    def __init__(self, numeros: list[int]) -> None:
        self.numeros = numeros

    def media(self) -> float:
        media = sum(self.numeros) / len(self.numeros)
        return media

    def mediana(self) -> float:
        num_ordenados = sorted(self.numeros)
        if len(num_ordenados) % 2 == 0:
            i_med1 = (len(num_ordenados) // 2) - 1
            i_med2 = i_med1 + 1
            mediana = (num_ordenados[i_med1] + num_ordenados[i_med2]) / 2
            return mediana
        i_med = (len(num_ordenados) // 2) - 1
        mediana = num_ordenados[i_med]
        return mediana

    def moda(self) -> int:
        num_ordenados = sorted(self.numeros)
        moda = num_ordenados[0]
        cont_moda = 0
        cont = 0
        for num in num_ordenados:
            if num == moda:
                cont_moda += 1
            else:
                cont += 1
                if cont > cont_moda:
                    moda = num
        return moda


if __name__ == "__main__":
    numeros = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8]
    estatistica = Estatistica(numeros)
    print(estatistica.media())
    print(estatistica.mediana())
    print(estatistica.moda())
