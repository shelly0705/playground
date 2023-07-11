# Lesson 2 - Function
def print_you_can_vote(user_age, user_name, location):
    print("Yes " + user_name + ", you can vote!")
    print("You are from " + location + " and you are already " + user_age)
    print('Please check the related rules at: ' + 'https://www...')


def print_you_cannot_vote(age, name, where):
    print("no " + name + ", you can't vote!")
    print("You are from " + where + " and you are only " + age)
    print('Please check the related rules at: ' + 'https://www...')


print("What is your age?")
age = input()
print("What is your name?")
name = input()
print("where are you from?")
where = input()


if where == "taiwan":
    if int(age) >= 20:
        print_you_can_vote(user_name = name, location = where, user_age = age)
    else:
        # Wrong usage!
        print_you_cannot_vote(name, age, where)
else:
    if age >= 18:
        print_you_can_vote(user_age = age, user_name = name, location = where)
    else:
        print_you_cannot_vote(age, name, where)
