# 變數名稱只能有英文字母、數字、底線。 變數名稱可以字母底和底線開頭,但不能以數字起頭
# 變數名稱裡不能有空格


# 當一個函數被定義的時候，裡面的程式碼不會被真的執行。
def main():
    message = "hello python world!"
    print(message)
    message = "hello python crash course world!"
    print(message)


# 要等到函數的名稱 - 在這裏是 `main` 被真的呼叫 (`main()`) 的時候，函數體內的程式碼才會被真的執行。
main()
