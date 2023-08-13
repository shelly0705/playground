#sort()永久性依字母順序排列,sort(reverse=True)永久性依字母相反順序排列
handbags = ['gucci', 'louis vuitton', 'dior', 'bottega veneta']
print(handbags.sort())

print(handbags.sort(reverse=True))

#sorted()暫時性改變排列順序
print("here is the original list:")
print(handbags)

print('\nhere is the sorted list:')
print(sorted(handbags))

print('\nhere is the original list:')
print(handbags)

#reverse()反序印出串列,reverse會永久性改變排列順序,但只要在對串列套用reverse(),即可隨時再反轉回來
handbags.reverse()
print(handbags)
#len()快速找出串列長度,計算數量時python會從1起算
print(len(handbags))
