#input()函式的工作原理
message = input("Tell me something,and I will repeat it back to you:")
print(message)

name = input('please enter your name: ')
print('Hello,' + name + '!')

prompt = "If you tell us who you are, we can personlize the messages you see."
prompt += "\nWhat is your first name?:"

name = input(prompt)
print("Hello, " + name.title() +"!")

age = input('\nHow old are you? ')
age = int(age)

if age > 18:
    print("you can play!" )
else:
    print("sorry,you are too young..")
    