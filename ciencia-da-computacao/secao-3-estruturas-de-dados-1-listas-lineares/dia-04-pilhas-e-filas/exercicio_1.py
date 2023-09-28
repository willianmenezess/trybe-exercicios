from linked_list import LinkedList
# from node import Node


class Queue:
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
