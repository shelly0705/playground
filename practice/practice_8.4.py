#Start with user that need to be verified(已證實的)
#and an empty list to hold confirmed(被證實的) users.
unconfirmed_users =["shelly", "jimmy", "katia"]
confirmed_users = []

#verify each user until there are no more unconfirmed users.
#move each verified uesr into the list of confirmed users.
while unconfirmed_users:
    current_user = unconfirmed_users.pop()

    print("Verifying user: " + current_user.title())
    confirmed_users.append(current_user)

#display(陳列) all confirmed users.
print("\nThe following users have been confirmed")
for confirmed_user in confirmed_users:
    print(confirmed_user.title())

#
pets = ['dog', 'cat', 'rabbit', 'cat', 'dog', 'pig', 'cat']
print(pets)
while 'cat' in pets:
    pets.remove('cat')
print(pets)
#
responses = {}

#Set a flag to indicate(指示) that polling is active.
polling_active = True

while polling_active:
    #Prompt(即時的) for the person's name and response（回覆）.
    name = input("\nWhat is your name?")
    response = input("\nWhich mountain would you like to climb someday? ")

    #Store the response in the dictionary.
    responses[name] = response

    #Find out if anyone else is going to take the poll.
    repeat = input("Would you like to let another person respond? (Yes/ no) ")
    if repeat == 'no':
        polling_active = False
    
    #polling is complete. Show the results.
    print("\n---Poll Results---")
    for name, response in responses.items():
        print(name + " would like to climb " + response + ".")