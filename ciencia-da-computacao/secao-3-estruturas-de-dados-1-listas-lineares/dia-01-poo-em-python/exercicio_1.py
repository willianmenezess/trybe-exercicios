class TV:
    def __init__(self, tamanho: int) -> None:
        self.__tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    def aumentar_volume(self) -> None:
        if 0 <= self.__volume <= 99 and self.__ligada:
            self.__volume += 1

    def diminuir_volume(self) -> None:
        if 0 <= self.__volume <= 99 and self.__ligada:
            self.__volume -= 1

    def modificar_canal(self, numero: int) -> None:
        try:
            if 1 <= numero <= 99 and self.__ligada:
                self.__canal = numero
        except ValueError:
            raise ValueError("Canal inválido")

    def ligar_desligar(self) -> None:
        self.__ligada = not self.__ligada

    def __str__(self) -> str:
        return (
            f"""TV {self.__tamanho} polegadas,
volume {self.__volume}, canal {self.__canal},
ligada: {self.__ligada}"""
        )
