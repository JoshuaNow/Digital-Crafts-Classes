# print(" hello world \v this is a text")

greeting = "Hello %s, it is very nice to meet you and your friend %s!"

name_of_user = input("What is your name? ")
length_of_name = len(name_of_user)
if length_of_name > 0:
    print(greeting % (name_of_user, name_of_friend))
else:
    print("OK, I'll ask again some other time.")
    name_of_friend = input("What is your friend's name? ")  
    
    
    # REALLY IMPORTANT YOU CAN YOU PASS AFTER ELSE OR IDENT TO LET IT PASS