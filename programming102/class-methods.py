class Mob:
    def __init__(self, name, health = 10):
        self.name = name
        self.health = health

    def get_hit(self, power):
        self.health = self.health - power
        print(f"I was hit for {power} ponts")
    
    def attack(self, enemy):
        enemy.get_hit(self.power)

bad_guy = Mob("EvilMcEvil")

hero = ("Sir Barksalot", 30)
hero.get_hit(6)


bad_guy.attack(hero)

# anything that is mobile in game desidgn