#類別
class Dog():  #第一個字母為大寫是類別的命名慣例，括號中是空白，因為我們要從零開始建立這格累別
    """A simple attempt to model a dog."""

#__init__用法
    def __init__(self, name, age):
        """Initialize name and age attributes.""" #initialize 初始化 、 attributes 屬性
        self.name = name
        self.age = age

    def sit(self):
        """Simulate a dog sitting in response to a command.""" #simulate模仿、 respons答覆、 command命令
        print(self.name.title() + " is now sitting.")

    def roll_over(self):
        """Simulate rolling over in response to a command."""
        print(self.name.title() + " rolled over!")

my_dog = Dog('moko', 8) 
your_dog = Dog('herry',13)
print("My dog's name is " + my_dog.name.title() + ".")
print("My dog is " + str(my_dog.age) + " years old.")
my_dog.sit()
my_dog.roll_over()

print("\nYour dog's name is " + your_dog.name.title()+ ".")
print("Your dog is " + str(your_dog.age) + " years old.")
your_dog.sit()
your_dog.roll_over()

