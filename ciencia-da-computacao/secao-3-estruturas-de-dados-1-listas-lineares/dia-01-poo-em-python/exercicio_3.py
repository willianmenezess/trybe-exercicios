from abc import ABC, abstractmethod
from typing import Union


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self) -> None:
        pass

    @abstractmethod
    def perimetro(self) -> None:
        pass


class Quadrado(FiguraGeometrica):
    def __init__(self, lado: float) -> None:
        self.lado = lado

    def area(self) -> Union[int, float]:
        return self.lado**2

    def perimetro(self) -> Union[int, float]:
        return self.lado * 4

    def __str__(self) -> str:
        return f"Área: {self.area()}, Perímetro: {self.perimetro()}"


class Retangulo(FiguraGeometrica):
    def __init__(self, base: float, altura: float) -> None:
        self.base = base
        self.altura = altura

    def area(self) -> Union[int, float]:
        return self.base * self.altura

    def perimetro(self) -> Union[int, float]:
        return (self.base * 2) + (self.altura * 2)

    def __str__(self) -> str:
        return f"Área: {self.area()}, Perímetro: {self.perimetro()}"


class Circulo(FiguraGeometrica):
    def __init__(self, raio: float) -> None:
        self.raio = raio

    def area(self) -> Union[int, float]:
        return 3.14 * (self.raio**2)

    def perimetro(self) -> Union[int, float]:
        return 2 * 3.14 * self.raio

    def __str__(self) -> str:
        return f"Área: {self.area()}, Perímetro: {self.perimetro()}"
