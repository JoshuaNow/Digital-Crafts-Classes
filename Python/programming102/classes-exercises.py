class vehicle:
    def __init__(self, category, wheels=4):
        self.category = category
        self.wheels = wheels

ford = vehicle("Truck")
kia = vehicle("suv")
honda = vehicle("sedan")
toyota = vehicle("minivan")
ducati = vehicle("motorcycle", 2)




print(ducati.wheels)
   
        

print(ford)

