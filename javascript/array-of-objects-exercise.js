let myShips = [
    {
        ship: "The Astro"
        topSpeed: 500
        acceleration: 15
        cargoCapacity: 500
    },
    {
        ship: "The cargo"
        topSpeed: 400
        acceleration: 10
        cargoCapacity: 800
    }   ,
    {
        ship: "The destroyer"
        topSpeed: 600
        acceleration: 30
        cargoCapacity: 300

    }
]

console.log(ships[1].name,ship[1].topSpeed)

ships.myShips.forEach((function(myShip){
    for(key in myShip){
        console.log (` ${key}: ${myShip[key]}`)
    }
})


