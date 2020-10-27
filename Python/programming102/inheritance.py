class Mob:
    def __init__(self, name, health = 10 , attack_power = 2):
        self.name = name
        self.health = health

    def get_hit(self, power):
        self.health = self.health - power
        print(f"I was hit for {power} ponts")
    
    def attack(self, enemy):
        enemy.get_hit(self.attack_power)


class Hero(Mob):
    def yell:(self)
    print("I%s say to thou villian. Prepare to die!" % self.name)
    pass


hero = Hero("Clint ")
print(hero.attack_power)
hero.yell()
bad_guy = Mob("Baddy")
hero.attack(bad_guy)




