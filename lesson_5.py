# Lesson 5 - More loops
def calculate_from_1_add_to_10():
    result = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
    return result


def calculate_from_1_add_to_5():
    result = 0

    for n in range(1, 6):
        result = result + n

    return result


def calculate_from_1_multi_to_5():
    result = 1

    for n in range(1, 6):
        result = result * n

    return result


def calculate_from_2_add_to_10_only_even():
    result = 0

    for n in range(1, 6):
        result = result + n * 2

    return result


def calculate_3_multi_6_multi_9_multi_12_multi_15():
    result = 1

    for n in range(1, 6):
        result = result * n * 3

    return result


def calculate_9_9_3_sequence():
    for n in range(1, 10):
        # 3
        # 6
        # 9
        # ...
        number = n * 3
        print(number)


def calculate_9_9_9_full_sentence():
    # S1 = str(9) + ' * ' + str(1) + " = " + str(9)
    # S2 = str(9) + ' * ' + str(2) + " = " + str(18)
    for n in range(1, 10):
        number = str(9) + " * " + str(n) + " = " + str(9 * n)
        print(number)


calculate_9_9_9_full_sentence()
