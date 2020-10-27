print("hi")
name = input( "Name Please: \n")

subject = input("Favorite Subject \n")

age = input("How old are you\n")

if int(age) >= 21:
    print("Grab a Beer?")

print( f"You said your name is {name}")



age = int(input('How old are you?\n'))
if age >= 21: #<- probably the best way to do it.
    print('You are old enough')
else:
    print("You are buy still a baby!")