animal_0 = {'color': 'green', 'points': 5}
animal_1 = {'color': 'blue', 'points': 10}
animal_2 = {'color': 'pink', 'points': 15}

animals = [animal_0, animal_1, animal_2]

for animal in animals:
    print(animal)

#range() ,
cars = []

#make 30 black car
for car_number in range(30):
    new_car = {'color': 'black', 'points': 5, 'speed': 'slow'}
    cars.append(new_car)

#show the first 5 cars
for car in cars[:5]:
    print(car)
print('...')

#show how many cars have been created.
print('\ntotal number of cars: ' + str(len(cars)))

for car_1 in cars[5:8]:
    if car_1['color'] == 'black' :
        car_1['color'] = 'white'
        car_1['points'] = 10
        car_1['speed'] = 'medium'

for car_1 in cars[0:8]:
    print(car_1)
print('...')

