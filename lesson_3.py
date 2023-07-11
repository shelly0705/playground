def calculate_bmi_and_print_it(weight, height, name):
    height_in_meter = int(height) / 100
    height_square = height_in_meter**2
    bmi = int(weight) / height_square
    print(name + ", you BMI is: " + str(bmi))


def ask_what_is_your_weight():
    print("What is your weight?")
    weight = input()
    return weight


def ask_what_is_your_height():
    print("What is your height?")
    height = input()
    return height


def ask_what_is_your_name():
    print("What is your name?")
    name = input()
    return name


weight = ask_what_is_your_weight()
height = ask_what_is_your_height()
name = ask_what_is_your_name()
calculate_bmi_and_print_it(weight=int(weight), height=int(height), name=name)
