grocery_lists = [
    ['Corn','Potatoes','Tomatoes'],
    ["milk","eggs","cheese","yogurt"],
    ['frozen' , 'pizza','popsicle']
]
# print("Vegteables")
# print(grocery_lists[0])
# print("dairy")
# print(grocery_lists[1])
# print("Frozen food")
# print(grocery_lists[2])

catagories = ["Vegteables" , "dairy", "frozen food"]


index = 0
for category in catagories:
    print("%i. %s" % (index+1, category))
    
    index+=1
