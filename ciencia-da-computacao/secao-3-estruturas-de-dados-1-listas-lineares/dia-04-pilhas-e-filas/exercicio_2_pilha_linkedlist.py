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

    # irá retornar o menor valor inteiro presente na pilha de lista encadeada
    def min_value(self):
        if self.is_empty():
            return None
        min_value = self.__data.get_element_at(0)
        current_value = self.__data.get_element_at(0)
        length = len(self.__data)
        while length > 0:
            if current_value.value < min_value.value:
                min_value = current_value
            current_value = current_value.next
            length -= 1
        return min_value.value


if __name__ == "__main__":
    # teste da classe Stack
    stack = Stack()
    print(stack)
    print(stack.is_empty())
    stack.push(1)
    stack.push(2)
    stack.push(3)
    print(stack)
    print(stack.peek())
    # print(stack.min_value())
