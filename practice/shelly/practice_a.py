#Physon program to check if the input number is odd or even.
#A number is even if division by 2 gives a remainder of 0.
# if the remainder is 1, it is an odd number.

number = int(input("Enter a number: "))
if number % 2 == 0:
    print("{0} is even".format(number))
else:
    print("{0} is odd".format(number))


#this program adds two numberS
number1 = input("enter first number : ")
number2 = input("enter second number : ")
sum = float(number1) + float(number2)
print("The sum of {0} and {1} is {2}".format(number1, number2, sum))