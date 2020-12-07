favorite_food = ["Taco Bell","Super_Mex","Panda Express"]
print(favorite_food[0])
print(favorite_food[2])

stuff_around = ["coffee cup", "mouse", "monitor" , "laptop"]

print(f"from {stuff_around} please  what you find the most interesting from 0-3 left to right")
user = int(input("0-3?\n"))

try:
    if user == 0:
        print(f"Oh you are intersted in my {stuff_around[0]}, nothing special just coffee with a little bit of creamer")
    elif user == 1:
        print(f"My {stuff_around[1]} is a gaming mouse a logitech wireless pro love that thing.")
    elif user == 2:
        print(f"I have 2 {stuff_around[2]} plus my laptop by the main one is a AlienWare 240hz gaming monitor")
    elif user == 3:
        print(f"My {stuff_around[3]} is an apple macbook pro, mostly use it for the MacOS interface.")
    else:
        print("choose a number from 0-3 0 being left 3 right")
except ValueError:
    print("please type in 0-3")