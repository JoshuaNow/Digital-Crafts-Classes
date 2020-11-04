let mySpaceship = {
    speed: 500,
    acceleration: 50,
    passangers:100,
    fuel:100
}


mySpaceship.payload = 500
console.log(mySpaceship)

mySpaceship.fuel = mySpaceship.fuel - mySpaceship.fuel / 3;
console.log(mySpaceship)

for(i in mySpaceship){
    console.log(i,":")
    console.log(mySpaceship[i])
}




