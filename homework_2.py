def find_positive(number_list):
    positive_number_list = []

    for number in number_list:
        if number > 0:
            positive_number_list.append(number)
    return positive_number_list


#now define a function 'find_negative' to find the negative numbers in a list 
# def find_negative(number_list):...

#test your function here
def find_negative(number_list):
    negative_number_list =[]
    for number in number_list:
        if number < 0:
            negative_number_list.append(number)
    return negative_number_list

#also, define a function 'find_even' to find the even numbers in a list
# def find_even(number_list):...

#test your function here
def find_even(number_list):
    even_number_list =[]
    for number in number_list:
        if number % 2 == 0:
            even_number_list.append(number)
    return even_number_list

 #number_list = [-37, -50, -1, 0]
print(find_positive([-37, -50, -1, 0]))
print(find_negative([-37, -50, -1, 0]))
print(find_even([-37, -50, -1, 0]))

#now we have 'find_positive', 'find_negative' ,'find_even' functions.
#we want to use them to create 'count_positive', 'count_negative', and 'count_even' functions.

def count_positive_not_cool(number_list):
    count = 0

    for number in number_list:
        if number > 0:
            count = count + 1
    
    return count

print(count_positive_not_cool([0, 6, 2, 4]))
#print '3', because there are 3 positive numbers in the list

#this is a way to do it,but we can have a cool way to do it.
#we can use 'find_positive' to find all the positive numbers in the list,
#and then use 'len' to count the number of elements in the list.

def count_positive(number_list):
    positive_number_list = find_positive(number_list)
    return len(positive_number_list)

print(count_positive([0, 6, 2, 4]))
#print'3',because there are 3 positive numbers in the list

#now define 'count_negative' and 'count_even' functions
def count_negative_not_cool(number_list):
    count = 0

    for number in number_list:
        if number < 0:
            count = count + 1
    
    return count

print(count_negative_not_cool([-3, -30, 0, 5, 10]))

def count_negative(number_list):
    negative_number_list = find_negative(number_list)
    return len(negative_number_list)

print(count_negative([-3, -30, 0, 5, 10]))

def count_even_not_cool(number_list):
    count = 0

    for number in number_list:
        if  number % 2 == 0:
            count = count + 1
    
    return count

print(count_even_not_cool([-3, -30, 5, 10]))

def count_even(number_list):
    even_number_list = find_even(number_list)
    return len(even_number_list)

print(count_even([-3, -30, 5, 10]))