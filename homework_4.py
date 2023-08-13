# file handleing and pathlib
# in python, we handle file very easily, and it's fun to work with files.
import pathlib #import(輸入).export(輸出)

#'BASE_DIR' means the directory where this file is located.
BASE_DIR = pathlib.Path(__file__).resolve().parent  # this means "where `playground` is"

# Example 1: open a file and write something into it
def write_content(file_name, content):
    path = BASE_DIR / "data" / file_name
    path.parent.mkdir(parents=True, exist_ok=True)  # In this case, `parents=True` can be ignored.
    path.write_text(content)


# This create a file named "shelly's-file.txt" in the same directory as this file.
# It will write "This is Shelly writing to a file." into the file.
write_content("my-content.txt", "This is Shelly writing to a file.")


# Example 2: now we want to use this function like 'print()'
# This is great, because now we con make something on our computer, instead of just printing it on the screen.
def calculate_bmi(weight, height):
    bmi = weight / (height**2)
    return bmi


jimmy_bmi = calculate_bmi(53.5, 1.63)
print(jimmy_bmi)  # print `20.136249012006473`
write_content("jimmy's-bmi.txt", str(jimmy_bmi))  # write
# 20.136249012006473' into a file named "jimmy's-bmi.txt"


# Example 3: now we want to write a list of lines into a file
# This is great, because now we can easily write many lines into a file.
def write_lines(file_name, lines):
    path = BASE_DIR / "data" / file_name
    path.parent.mkdir(parents=True, exist_ok=True)
    content = ""
    for line in lines:
        content = content + line + "\n"
    path.write_text(content)


# See how easy it is to write many lines into a file.
lines = ["I am Shelly.", "I am 25 years old.", "I have a dog named moko."]
write_lines("Shelly's-lines.txt", lines)


# Example 4:now we can write many things into a file, like
def find_biggest(number_list):
    if len(number_list) == 0:
        return "The list is empty" #empty 空的

    biggest = number_list[0]
    for number in number_list:
        if number > biggest:
            biggest = number

    return biggest


biggest = find_biggest([0, 6, 2, 4])
write_content("biggest.txt", str(biggest))
# write '6' into a file named "biggest.txt"


# Now, define a 'find_smallest()' function, and write the 'smallest.txt'
def find_smallest(number_list):
    if len(number_list) == 0:
        return "The list is empty" #empty 空的

    smallest = number_list[0]
    for number in number_list:
        if number < smallest:
            smallest = number

    return smallest


smallest = find_smallest([0, 6, 2, 4])
write_content("smallest.txt", str(smallest))


# Also , define a 'find_even()' function,and write the even numbers into a file named "even.txt"
def find_even(number_list):
    if len(number_list) == 0:
        return "The list is empty"
    
    even =[]
    for number in number_list:
        if number % 2 == 0:
            even.append(number)
    return even

even = find_even([0, 6, 3, 2, 4])
lines = []
for number in even:
    lines.append(str(number))

write_lines("even.txt", lines)


def find_odd(number_list):
    if len(number_list) == 0:
        return "the list is empty"
    
    odd = []
    for number in number_list:
        if number % 2 != 0:
            odd.append(number)
    return odd

odd = find_odd([0, 1, 3, 4])
lines = []
for number in odd:
    lines.append(str(number))

write_lines("odd.txt", lines)
