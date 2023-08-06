#字典{}
game_0 = {'color': 'pink', 'points': 5}
print(game_0)

game_0['x_position'] = 0
game_0['y_position'] = 25
print(game_0)
del game_0['points']
print(game_0)
print('The game is ' + game_0['color'] + '.')

game_0['color'] = 'white'
print('The game is ' + game_0['color'] + ' now.')

birthday_1 = {}
birthday_1['name'] = 'jimmy'.title()
birthday_1['month'] = 'january'.title()
birthday_1['day'] = 14
print(birthday_1)



