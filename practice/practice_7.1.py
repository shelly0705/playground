favorite_colors = {
    'shelly': 'pink',
    'jimmy': 'white',
    'katia': 'brown',
    'raymond': 'white',
    }

for name, color in favorite_colors.items():
    print(name.title() + "'s favorite color is " + 
         color.title() + "." )

for name in favorite_colors.keys():
    print(name)
    
#set() , 刪除重複的值.
for color in set(favorite_colors.values()):
    print(color)

friends = ['shelly', 'jimmy']
for name in favorite_colors.keys():
    print(name.title())

    if name in friends:
        print(' Hi ' + name.title() +
            ',I see your favorite color is ' + 
            favorite_colors[name] + '!')