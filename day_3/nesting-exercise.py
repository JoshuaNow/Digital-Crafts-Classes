# name = input("What is your pets name?\n")
# num = len(name)
# if len(name) == ("shadow"):
#     print("El Gato Diablo!")
# if len(name) == ("Daisy"):
#     print("Good dog")
# if len(name) > 3:
#         print(f"{name} is not long enough")
# else:
#   print("That is a sweet name!")



pet_name = input("What is your dogs name?\n")
num = len(pet_name)

if num < 3:
    print("Sorry that name is too short")
elif num >= 3:
    if pet_name == "Daisy":
        print("Good Dog")
    elif pet_name == "Shadow":
        print("El gato diablo")
    else:
        print(f"aww sweet {pet_name}")