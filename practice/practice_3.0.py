#list[]
#索引足標是從0開始,大多數程式語言也是如此
#-1為索引足標最後一個項目,以此類推
bicycles = ['trek', 'cannondale', 'redline', 'specialized']

#print(bicycles[0])
#print(bicycles[1].title())
#print(bicycles[-1].upper())
#print(bicycles[-2].lower())

message = "my favorate bicycle is " + bicycles[0].title() + "."
#print(message)


#append(), insret(), del(), pop()
names = ['jimmy', 'katia', 'minhua']
names[0] = 'pig' #pig, katia, minhua
names.append('raymond') #append = 附加  
print(names) #jimmy, katia, minhua, raymond

colors = []
#append()為附加,insert()為插入
colors.append('white') #white
colors.append('black') #white, black
colors.append('yellow') #white, black, yellow
colors.insert(0, 'pink') #pink, white, black, yellow
#print(colors)

del colors[1] #del為刪除
#print(colors)

#pop()彈出, ->把字串想像為堆疊,而堆疊的pop是把最頂端的項目彈出
popped_color = colors.pop()
print(colors)  #['pink', 'black']
print(popped_color) #yellow

colors.insert(1, "green")
colors.append('blue')
first_color = colors.pop(0)
print("My fevarite color is " + first_color.title() +".")
print(colors)

#remove()
colors.remove('black')
print(colors)