list1 = [True, True, True, True, False, False, False]


# metodo de busca iterativo => O(n)
def found_index_false(list, found):
    for index, status in enumerate(list):
        if status == found:
            return index


# metodo de busca binaria (dividir e conquistar) e iterativa => O(log n)
def find_first_bad_version(array):
    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:

        middle_index = (high_index + low_index) // 2

        if array[middle_index] is False:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    return low_index


print(found_index_false(list1, False))
print(find_first_bad_version(list1))
