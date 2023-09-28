from linked_list import LinkedList


# criando uma classe de Pilha(stack) comum, com as operações:
# push, pop, peek e is_empty
class Stack:
    """Implementação da ED Pilha usando lista encadeada (linkedList)"""
    def __init__(self):
        self.__data = LinkedList()

    def __str__(self):
        return f"Stack(data={self.__data})"

    def push(self, value):
        self.__data.insert_last(value)

    def pop(self):
        return self.__data.remove_last()

    def peek(self):
        if len(self.__data) == 0:
            return None
        return self.__data.get_element_at(len(self.__data) - 1)

    def is_empty(self):
        return self.__data.is_empty()
