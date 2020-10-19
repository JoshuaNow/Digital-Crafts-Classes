
# day = int(input("What day of the week is it 0 being sunday 6 being saturday?"))
# if day == 0:
#     print("Sunday")
# elif day == 1:
#     print("Monday")
# elif day == 2:  
#     print("Tuesday")
# elif day == 3:  
#     print("Wednesday")
# elif day == 4:  
#     print("Thursday")
# elif day == 5:  
#     print("Friday")
# elif day == 6:  
#     print("Saturday")
# elif day > 6:
#     print("try number 0-6")

day = int(input("What day of the week is it 0 being sunday 6 being saturday?"))
if day == 1 or day == 2 or day == 3 or day == 4 or day == 5:
    print("Get up and go to work there is some coding to be done!")
elif day == 0 or day == 6:
    print("sleep in baby you deserve it")
else:
    print("please write 0-6")