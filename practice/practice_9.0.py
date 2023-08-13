#function definition
def greet_user():
    """Display a simple greeting"""
    print("Hello!")

greet_user()

def greet_user(username):
    print('Hello '+ username.title() + '!')

greet_user('shelly') 

def describe_pet(animal_type, pet_name):
    """Display information about a pet."""
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + "!")

describe_pet('dog', 'moko')
#關鍵字引數(keyword argument)
describe_pet(pet_name="moko", animal_type="dog")

def describe_pet1(pet_name, animal_type="dog"):
    """Display information about a pet."""
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + "!")

describe_pet1("herry")
describe_pet1(pet_name="moko")
describe_pet1(pet_name="huiya", animal_type="cat")

#返回值(return value)
def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted"""
    print('What is your name?')
    full_name = first_name + " " + last_name
    return full_name.title()

name = get_formatted_name('shelly', 'kao')
print(name)

def get_formatted_name(first_name, middle_name, last_name):
    """Return a full name, neatly formatted"""
    full_name = first_name + " " + middle_name + " " + last_name
    return full_name.title()
name_1 = get_formatted_name('chieh', 'yu', 'kao')
print(name_1)

#引數變為可選擇性
def get_formatted_name(first_name, last_name, middle_name=''):
    """Return a full name, neatly formatted"""
    if middle_name:
        full_name = first_name + " " + middle_name + " " + last_name
    else:
        full_name = first_name + " " + last_name
    return full_name.title()
name_2 = get_formatted_name('chieh', 'kao', 'yu')
print(name_2)
name_3 = get_formatted_name('shelly', 'kao')
print(name_3)

#返回字典
def build_person(first_name, last_name):
    """Return a dictionary of information about a person."""
    person = {'first': first_name, 'last': last_name}
    return person

name_4 = build_person('shelly'.title(), 'kao'.title())
print(name_4)

