from linked_list import LinkedList

# input: 1 -> 1 -> 2
# saída: 1 -> 2

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3


def remove_duplicate_elements(linked_list):
    '''Esta função recebe uma linked list e remove os elementos duplicados.
    Ela deve ter complexidade O(n).'''

    if linked_list.is_empty():
        return linked_list

    current_value = linked_list.head
    length = len(linked_list)
    new_linked_list = LinkedList()
    while length > 0:
        if new_linked_list.index_of(current_value.value) == -1:
            new_linked_list.insert_last(current_value.value)
        current_value = current_value.next
        length -= 1
    return new_linked_list


# solução do course:
# def delete_duplicates(linked_list):
#     list_with_unique_elements = LinkedList()

#     while linked_list:
#         current_node = linked_list.remove_first()
#         if list_with_unique_elements.index_of(current_node.value) == -1:
#             list_with_unique_elements.insert_last(current_node.value)

#     return list_with_unique_elements


if __name__ == "__main__":
    linked_list = LinkedList()
    linked_list.insert_last(1)
    linked_list.insert_last(1)
    linked_list.insert_last(2)
    linked_list.insert_last(3)
    linked_list.insert_last(3)
    print(linked_list)
    print(remove_duplicate_elements(linked_list))
    # print(delete_duplicates(linked_list))
