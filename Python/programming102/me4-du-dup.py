num = [1, 2, 8, 8, 5, 6]

new = []
for i in num:
    if i not in new:
        new.append(i)
print(new)

#not in evalutes to true if it does not find variable in specified sequence
# this code takes all the number from the list and puts it in a new list without any duplicates
