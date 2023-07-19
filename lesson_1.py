# Lesson 1 - `if-else`, `input` and `print`

print("What is your age?")
age = input()
print("What is your name?")
name = input()
print("where are you from?")
where = input()

if where == "taiwan":
    if int(age) >= 20:
        print("Yes" + name + ",you can vote!")
    else:
        print("no" + name + ",you can't vote!")
else:
    if int(age) >= 18:
        print("Yes" + name + ",you can vote!")
    else:
        print("no" + name + ",you can't vote!")
        


