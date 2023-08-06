cars = []

for car_number in range(30):
    new_car = {'color': 'black', 'points': 5, 'speed': 'slow'}
    cars.append(new_car)

for car in cars[0:3]:
    if car['color'] == 'black' :
        car['color'] = 'white'
        car['points'] = 10
        car['speed'] = 'medium'
    elif car['color'] == 'white' :
        car['color'] = 'pink'
        car['points'] = 15
        car['speed'] = 'fast'  #?

for car in cars[0:5]:
    print(car)