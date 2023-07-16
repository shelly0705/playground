# Lesson 6 - Functions & Loops


def add_from_1_plus_to_10():
    total = 0

    for n in range(1, 11):
        total = total + n  # 0 + 1 + 2 .. + 10

    return total


def add_from_1_multiply_to_10():
    total = 1

    for n in range(1, 11):
        total = total * n

    return total


def add_from_x_multiply_to_y(x, y):
    total = 1

    for n in range(x, y + 1):
        total = total * n

    return total


def add_from_x_plus_to_y(x, y):
    total = 0

    for n in range(x, y + 1):
        total = total + n

    return total


def add_from_x_concat_to_y(x, y):
    sentence = ""

    for char in range(x, y + 1):
        sentence = sentence + str(char)  # "" + "1" + "2" + ... "12345678910"

    return sentence


def func_9_9_formula_simple():
    sentence = ""

    for x in range(2, 10):
        for y in range(1, 10):
            # e.g. 2 * 4 = 8
            sub_sentence = str(x) + " * " + str(y) + " = " + str(x * y) + "\n"
            sentence = sentence + sub_sentence
            # "2 * 1 = 2\n"
            # "2 * 2 = 4\n"
            # ...

    return sentence


def func_19_19_formula_simple():
    total = ""

    for x in range(2, 20):
        for y in range(1, 20):
            partial = str(x) + " * " + str(y) + " = " + str(x * y) + "\n"
            total = total + partial

    return total


def func_n_n_formula_simple(n):
    total = ""

    for x in range(2, n + 1):
        for y in range(1, n + 1):
            partial = str(x) + " * " + str(y) + " = " + str(x * y) + "\n"
            total = total + partial

    return total


def custom_formula(start, end, pretty_print):
    total = ""

    for x in range(start, end + 1):
        for y in range(start, end + 1):
            if pretty_print:
                partial = str(x) + " * " + str(y) + " = " + str(x * y) + "\n"
            else:
                partial = str(x) + "*" + str(y) + "=" + str(x * y) + "\n"
            total = total + partial

    return total


def better_formula(end, except_1):
    total = ""

    if except_1:
        for x in range(2, end + 1):
            for y in range(1, end + 1):
                partial = str(x) + " * " + str(y) + " = " + str(x * y) + "\n"
                total = total + partial
    else:
        for x in range(1, end + 1):
            for y in range(1, end + 1):
                partial = str(x) + " * " + str(y) + " = " + str(x * y) + "\n"
                total = total + partial

    return total


def n_n_n_formula(n):
    total = ""

    for x in range(2, n + 1):
        for y in range(1, n + 1):
            for z in range(1, n + 1):
                partial = (
                    str(x)
                    + " * "
                    + str(y)
                    + " * "
                    + str(z)
                    + " = "
                    + str(x * y * z)
                    + "\n"
                )
                total = total + partial

    return total


result = n_n_n_formula(9)
print(result)
