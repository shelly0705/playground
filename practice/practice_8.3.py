#break,不管條件檢測結果為何,使用 break 可以馬上離開 while迴圈不在執行迴圈剩下的程式
prompt = "\nPlease enter the name of a city you visited:"
prompt += "\n(Enter 'quit' when you are finished.)"

while True:
    city = input(prompt)

    if city == 'quit':
        break
    else:
        print("I'd love to go to " + city.title() + "!")

#continue陳述句會返回迴圈的開頭,並檢測條件再判斷要不要繼續執行迴圈
current_number = 0
while current_number < 10:
    current_number += 1
    if current_number % 2 != 0:
        continue
    print(current_number)