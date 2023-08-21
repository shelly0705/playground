# For loop is a very useful structure in Python.
# It makes you repeat the same thing for many times.


# For example, if you want to print 1 to 10, you can do it like this:
def print_1_to_10():
    for i in range(1, 11):
        print(i)
    print("Done!")


print_1_to_10()  # 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Done!


# If you want to print 1 to 100, you can do it like this:
def print_1_to_100():
    for i in range(1, 101):
        print(i)
    print("Done!")


print_1_to_100()  # 1, 2, 3, ..., 100, Done!


# It makes you get and set the value of a list easily.
# For example, if you want to print all the elements in a list, you can do it like this:
def print_list_elements(list):
    for i in list:
        print(i)
    print("Done!")


print_list_elements([1, 2, 3, 4, 5])  # 1, 2, 3, 4, 5, Done!


# Sometimes, you are doing something repeatedly, but you don't need to use the value of i.
# In this case, you can use an underscore to replace i.
# For example, if you want to print 10 "Hello"s, you can do it like this:
def print_hello_10_times():
    for _ in range(10):
        print("Hello")
    print("Done!")


# For sure, you can still use `i` in the loop.
# But using `_` is more clear to tell the reader that you don't need to use `i`.


# You can also use while loop to do the same thing.
def print_hello_10_times_with_while():
    i = 0
    while i < 10:
        print("Hello")
        i = i + 1
    print("Done!")


print_hello_10_times()  # Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Done!
print_hello_10_times_with_while()  # Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Hello, Done!


# They are the same.

# Actually, you can always replace a for loop with a while loop.
# A while loop is more flexible than a for loop.
# But a for loop is more clear and easy to read.
# Now let's do some exercises.


# Exercise 1:
# Write a function to print all the elements in a list, with while loop.
# Hint 1: You can use `len(list)` to get the length of a list.
# Hint 2: You can use `list[i]` to get the i-th element of a list.
def print_list_elements_with_while(list):
    ...


# Exercise 2:
# Write a function to collect elements from `input` until the user inputs "Done".
# Then print all the elements.
# Hint: You can use `input()` to get the input from the user.
def collect_elements_until_done():
    ...


# Exercise 3:
# Write a function "shelly_bot" to chat with the user.
# The user can input these sentences:
#  "Hello"
#  "What's your name?"
#  "What's you age?"
#  "Bye"

# If the user inputs "Hello", the program should print "Hi!".
# If the user inputs "What's your name?", the program should print "My name is Shelly".
# If the user inputs "What's you age?", the program should print "I'm 25 years old".
# If the user inputs "Bye", the program should print "Good bye" and exit.
# If the user inputs anything else, the program should print "Sorry, I don't understand".


# This is a bit hard. Here are some hints:
# Hint 1: You can use `input()` to get the input from the user.
# Hint 2: You can use `==` to check if two strings are the same.
# Hint 3: You should use a while loop to keep the program running.
# Hint 4: You can use `if ... elif ... else ...` to check the input.
def shelly_bot():
    ...
