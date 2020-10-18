# i = 0  #most base loop code
# while i < 10:
#     print(i)
#     i += 1


# num = 2
# max_num = 120

# while num < max_num: #as long as this true run the While code block!!!
#     print(num)
#     num += num



# j = 0
# while j < 0: this is an infinite loop will crasht the computer if j
#     print(j)                                                      while True \n print(j) j will always be true so infinite loops 

 
# name = " "
# while name != "josh":
#     name = input("please say your name!")

# print("Great I know you could do it!")



# i = 0
# while i <= 10:
#     print(i)
#     i+= 1

# i = 10
# while i >= 0:
#     print(i)
#     i-=1 


user_name = ""
password = ""
attempts = 0
while user_name != "josh" and password != "jupiter":
    user_name = input("Please enter your username\n")
    password = input("Please enter your password \n")
    attempts += 1
    if attempts == 3:
        print("You have tried to many times try again in a few minutes.")
        break
    








