#if,else
colors = ['red', 'orange', 'yellow', 'blue']
for color in colors:
    if color == 'yellow':
        print(color.upper())
    else:
        print(color.lower())

names = ['jimmy', 'shelly', 'raymond', 'katia']
for name in names:
    if name == 'jimmy':
        print(name.title())
    else:
        print(name)

age = 15
if age < 4:
    print("your admission cost is $0.")
elif age < 18:
    print("your admission cost is $5.")
else :
    print("your admission cost is $10.")

simple_age = 15
if simple_age < 4:
    price = 0
elif simple_age < 18:
    price = 5
else :
    price = 10
print("your admission cost is $"+str(price)+".")
#想執行一個程式區塊,使用if-elif-else;想執行多個,使用if陳述句