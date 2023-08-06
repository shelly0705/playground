pizza = {
    'crust' : 'thick',
    'toppings' :['mushrooms', 'extra cheese'],
    }
for topping in pizza['toppings']:
    print('\n' + topping)

favorite_colors = {
    'shelly' : ['white', 'pink'],
    'jimmy' :['white'],
    'ramond' :['yellow', 'black'],
    'katia' :['white', 'brown'],
    }

for name,colors in favorite_colors.items():
    if len(colors) > 1:
        print("\n" + name.title() + "'s favorite colors are:")
    else : 
        print("\n" + name.title() + "'s favorite color is:")
    for color in colors :
        print('\t' + color)

users = {
    'shelly': {
        'first': 'jieyu',
        'last': 'kao',
        'location': 'taipei',
        },

    'jimmy': {
        'first': 'jingzhi',
        'last': 'lin',
        'location': 'yilan',
        }
    }

for username, user_info in users.items():
    print('\nusername: '.title() + username.title())
    full_name = user_info['first'] + " " + user_info['last']
    location = user_info['location']

    print('\tfull name: '.title() + full_name.title())
    print('\tlocation: '.title() + location.title())