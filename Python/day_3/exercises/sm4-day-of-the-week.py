# day = int(input('How many days into this week are we? Enter Day (0-6)? '))
# days = ("sunday" , "monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday")

# print(days[day])


day = int(input("What day of the week is it 0 being sunday 6 being saturday?"))
if day == 0:
    print("Sunday")
elif day == 1:
    print("Monday")
elif day == 2:  
    print("Tuesday")
elif day == 3:  
    print("Wednesday")
elif day == 4:  
    print("Thursday")
elif day == 5:  
    print("Friday")
elif day == 6:  
    print("Saturday")
elif day > 6:
    print("try number 0-6")

day
print(f"Wow today is {day} ")






if day == (0,1,2,3,4,5,6):
    print("Today is " + str(day))
