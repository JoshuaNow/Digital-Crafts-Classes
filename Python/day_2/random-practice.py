# def greet(name): #<--------- name is a parameter where the arguments gets passed through
#     if name == "claire":
#         print("you smell like pickles")
#         return#<---- return is like break except only for a function.
#     print("hey there")
#     print("Welcome " + name)


# greet("Caleb") #<<<<<-------- arguments gets passed through the function
# greet("sabrina")




####return values



# def greet(name = "user" ,be_nice=True): #<--------- name is a parameter where the arguments gets passed through
#     if name == "claire":
#         return "Who do you think you are?" #<---- return is like break except only for a function.
#     return "Hey there welcome" + name
    


# # returned = greet("Sabrina") #<<<<<-------- arguments gets passed through the function
# # greet("sabrina")

# print(greet("claire"))






# def greet(name ,be_nice = True ): #<--------- name is a parameter where the arguments gets passed through
#     if not be_nice:
#         return "Who do you think you are?" #<---- return is like break except only for a function.
#     return "Hey there welcome" + name
    


# # returned = greet("Sabrina") #<<<<<-------- arguments gets passed through the function
# # greet("sabrina")

# print(greet("Caleb" , False))




# def greet_all(*people):
#     for person in people:
#         print("hello " +person)

# # friends = 

# greet_all("Bob" , "Josh" , "Austin")


# def print_info(name, age , email):
#     print(name + " is " + str(age) + " . reached at " + email)

# info = ["Josh" , 12, "Josh@gmail.com"]

# print_info(*info)



#functions calling functions


# def greet(person, first_time =False):
#     if first_time:
#         return "First time for everything,right? Welcome, " + person
#     return "hello, " + person

# def greet_all(people):
#     for person in people:
#         print(greet(person, True))



# friends = ["Bob" , "Josh" , "Austin"]

# greet_all(friends)


class Book():

    favorites = []

    def __init__(self, title, pages):
        self.title = title
        self.pages = pages
    
    def is_long(self):
        if self.pages > 100:
            return True
        return False

    def __str__(self):
        return f"{self.title} is {self.pages} pages long."

    def __eq__(self, other):
        if self.title == other.title and self.pages == other.pages:
            return True
        return False

book = Book("Are You My Mother?" , 72)
book2 = Book("The Diggig-est Dog", 72)

Book.favorites.append(book)
Book.favorites.append(book2)

print(Book.favorites)



print(book == book2)