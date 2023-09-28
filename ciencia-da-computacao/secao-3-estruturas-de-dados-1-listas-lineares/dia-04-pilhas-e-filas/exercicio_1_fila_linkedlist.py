from linked_list import LinkedList
# from node import Node


# criando uma classe de Fila comum, com as operações (métodos) enqueue,
# dequeue, peek e is_empty
class Queue:
    """Implementação da ED Fila usando lista encadeada (linkedList)"""

    def __init__(self):
        self.__data = LinkedList()

    def __str__(self):
        return f"Queue(data={self.__data})"

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        return self.__data.remove_first()

    def peek(self):
        if len(self.__data) == 0:
            return None
        return self.__data.get_element_at(0)

    def is_empty(self):
        return self.__data.is_empty()


if __name__ == "__main__":
    # teste da classe Queue
    queue = Queue()
    print(queue)
    print(queue.is_empty())
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    print(queue)
    # print(queue.is_empty())
    # print(queue.peek())
    # queue.dequeue()
    # print(
    #     queue,
    #     queue.peek(),
    #     queue.is_empty(),
    #     sep="\n"
    # )
