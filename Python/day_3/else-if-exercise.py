age = int(input("Guess my number, if you guess right you will win a car!\n"))
if age == 30:
    print("Congrats!! you won this car!\n")
elif age > 30:
    print("Sorry that number is too high! Try again next time.\n")
else: 
    print("Sorry that number is too low! Try again next time.\n")