my_list = [2 , 4 , 6 , 8 , 10]
largest = float("-inf")

for num in my_list: 
    if num > largest:
        largest = num
        
print(max(my_list))
#using sort
my_list.sort()


