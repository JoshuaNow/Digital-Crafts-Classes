name = input("what is your name?")
num = len(name)
 ## You can have multiple conditions here
if num > 3 and num < 15:
    if num == 4:
        print('Perfect Length!')
    else:
        print("It's an ok length")
          
    print(f"Welcme {name}")
else:
    print('%s is not a good number of characters' % len(name))