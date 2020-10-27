import random

s_num = random.randint(1,10)
guess = None
guess_count = 0

while guess != s_num:
    guess = int(input("please giess a number?\n"))
    if guess == s_num:
        print("yes you win.")
    elif guess < s_num:
        print("Your number is too low, try again.") 
    elif guess < s_num:
        print("Your number is too low, try again.")    
        guess_count += 1
print("Yes you win.")
        
if guess_count <= 5:
    print("You guessed to many times. too bad")
    