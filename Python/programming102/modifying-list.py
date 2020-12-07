# my_pets = ["Daisy", "Molly" , "Shadow"]
# my_pets.append("Rainbow")
# print(my_pets)
############## appending method. is add single item

my_dogs = ["Daisy, Molly"]
my_cats = ["shadow", "Rainbow"]

my_pets = my_dogs + my_cats #this doesn't modify  the list it just adds them they still remain seperate.
print(my_pets)
print(my_dogs)

my_pets = my_dogs + ["Gorge"] #<---- if you want to add a string you have to make it into a list with the single word
print(my_pets)

combined_literal = [1,3,5] + ["A" , "b" , True]
print(combined_literal)

print(my_pets) #<-- concating makes it a new listby keepign the other list added. forever

new_set_of_pets = []  #extend  adds a whole list or string literals.
new_set_of_pets.extend(my_dogs)
print(new_set_of_pets)
new_set_of_pets.extend(my_cats)
print(new_set_of_pets)
new_set_of_pets.extend(["m", "D"])
print(new_set_of_pets)


new_set_of_pets[1] = "El Gato Diablo" #to change a new list name to another name this is how you would do it.
print(new_set_of_pets)


new_set_of_pets[1] = ["El Gato Diablo", "dogface"] #you can add a list to a list by replacing a index in the list.
print(new_set_of_pets)

print(my_pets) #deletes 

del my_pets[1] #deletes the index number you put
print(my_pets)

