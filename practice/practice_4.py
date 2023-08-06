#looping迴圈:for A in B, 對Ｂ串列中取出名字,並將它存放到Ａ變數內。
colors = ['red', 'orange', 'yellow', 'green', 'blue']
for color in colors:
    print(color)

#range()
for value in range(1,6):
    print(value)

numbers = list(range(1,5))
print(numbers)

odd_numbers = list(range(1,11,2)) #[1.3.5.7.9]
print(odd_numbers)

squares = []
for value in range(1,11):
    square = value**2
    squares.append(square)
print(squares)

simple_squares_1 = []
for value in range(1,11):
    simple_squares_1.append(value**2)
print(simple_squares_1)

#串具推導解析
# for迴圈是for value in range(1,11),會把 1 到 10 數字提供給前面的表示式 value**2來計算
simple_squares_2 = [value**2 for value in range(1,11)]
print(simple_squares_2)

digits = [1,2,3,4,5,6,7,8,9]
print(min(digits))
print(max(digits))
print(sum(digits))
