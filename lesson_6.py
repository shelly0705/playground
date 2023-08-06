# Lesson 6 - List


def example():
    name = "white"
    age = 25
    pretty = True

    favorite_3_colors = ["white", "pink", "black"]
    for color in favorite_3_colors:
        print("going to print something...")
        print(color)


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


def example2():
    statements = [
        "2 * 1 = 2",
        "2 * 2 = 4",
        "2 * 3 = 6",
        "2 * 4 = 8",
        "2 * 5 = 10",
        "2 * 6 = 12",
        "2 * 7 = 14",
        "2 * 8 = 16",
        "2 * 9 = 18",
    ]

    new_statements = []
    for statement in statements:
        new_statement = statement + "!"
        new_statements.append(new_statement)

    print(new_statements)

    even_new_statements = []
    for statement in new_statements:
        even_new_statement = statement + "?"
        even_new_statements.append(even_new_statement)

    print(even_new_statements)


def get_new_score(score):
    return score


def get_new_score_table_simple(score_table):
    new_score_table = []

    for row in score_table:
        new_row = [row[0], row[1], row[2]]
        new_score_table.append(new_row)

    return new_score_table


def get_new_score_table(score_table):
    new_score_table = []

    for row in score_table:
        new_row = [row[0], get_new_score(row[2]), get_new_score(row[1])]
        new_score_table.append(new_row)

    class_name_1 = new_score_table[0][1]
    class_name_2 = new_score_table[0][2]

    new_score_table[0][1] = class_name_2
    new_score_table[0][2] = class_name_1

    # Or, simply
    # new_score_table[0][1], new_score_table[0][2] = new_score_table[0][2], new_score_table[0][1]

    return new_score_table


def merge_score_table(score_table_1, score_table_2):
    table = []

    for row in score_table_1:
        table.append(row)

    for row in score_table_2:
        table.append(row)

    return table


def sum_team_score_table(team_score_table):
    table = []
    total = 0 
    for row in team_score_table:
        table.append(row)


    return table


team_score_table = [
    ["Jimmy", 16, 35],
    ["Shelly", 14, 36],
    ["Jack", 12, 37],
]


result = sum_team_score_table(team_score_table)
print(result)
# Output
# [
#     ["Jimmy", 16, 35],
#     ["Shelly", 14, 36],
#     ["Jack", 12, 37],
#     ["total", 42, 108],
# ]
