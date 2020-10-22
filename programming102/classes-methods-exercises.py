class vehicle:
    def __init__(self, top_speed , acceleration ,category, wheels=4):  # this can be changed 
        self.category = category
        self.top_speed = top_speed
        self.acceleration = acceleration
        self.position = 0
        self.wheels = wheels
        self.speed = 0
        self.race_stat = []
        
    def move(self):
        self.accelerate()
        self.position += self.speed
        self.race_stat.append({"speed" : self.speed })

    def accelerate(self):
        self.speed += self.acceleration
        if self.speed > self.top_speed:
            self.speed = self.top_speed
        
all_cars = {

"ford" : vehicle(),
"kia" : vehicle(),
"honda" : vehicle(),
"toyota" : vehicle(),
"ducati" : vehicle()




}


print("20 second run!")

for i in range(20):
    print(f"*********second {i}***************")
    for car_name in all_cars:
        cur_car = all_cars[car_name]
        cur_car.move()
        print(f"{cur_car.speed} m/s")

for car_name in all_cars:
    print(f" {car_name} - {all_cars[car_name].position}")

# ford = vehicle("Truck")
# kia = vehicle("suv")
# honda = vehicle("sedan")
# toyota = vehicle("minivan")
# ducati = vehicle("motorcycle", 2)

# print(ducati.wheels)
# print(ford)


#we can import time

