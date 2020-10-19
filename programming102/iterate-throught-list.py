my_children = ["Oliva", "Alle" , "Mark"]

index = 0

my_list = [index] # my_list[0] <-- exact same thing


while index < len(my_children):
    print(index+1, my_children[index])  #infinite loop make sure that doesn't happen add +=1
    index+= 1

    #the first index+1 does not modify index = 0  index+=1 does

for child in my_children: #<--- this child makes  a variable for eachone on the list
    print(child)


#I can use this if I want to number the list with a "for"
index = 0
for child in my_children:
    print(index, child)
    index+=1