i = 0
while i <= 10:
    print(i)
    i += 1 

i = 10
while 0 <= i:
    print(i)
    i -= 1 

username = input("")
while username != "username":
    print("now type in the password")
password = input("password")
while password != "password\n":
    print("thank you for logging on")

username = "techguy"
user_password = "Falcon"
u_name = input("Please enter your username\n")
u_password = input("Please enter your password\n")
if u_name == username and u_password == user_password:
    print("Welcome to the world of technology!")
else:
    print("Please reenter username and password")