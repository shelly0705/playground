# we want to use 'for' with 'list.
# we also incroduce "exception handling" here.

def find_biggest(number_list):
    if len(number_list) == 0:
        return "The list is empty"
    
    biggest = number_list[0]
    for number in number_list:
        if number > biggest:
            biggest = number
    
    return biggest

print(find_biggest([0, 6, 2, 4]))
#print '6',because 6 is the biggest number in the list
print(find_biggest([]))
#print"'the list is empty'"

#new define a function 'find_smallest' to find the smallest number in a list
#def find_smallest(number_list) :
def find_smallest(number_list):
    if len(number_list) == 0:
        return "The list is empty"
    
    smallest = number_list[0]
    for number in number_list:
        if number < smallest:
            smallest = number
    
    return smallest

print(find_smallest([0, 6, 2, 4]))