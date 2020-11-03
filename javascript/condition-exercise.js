// let a = 10 , p= 20 ,x = 30;

// if(a<10){
//     console.log('a is less than 10')
// } else if (a <20) {
//     console.log("a is less than 20")
// }else {
//     console.log("a is larger than 20")
// }
// // -----------------------------------------
// let z = 10

// let t = 20, y = 10 
// t >= y ? result = 'higher' : result = 'lower'
// console.log(result)




// -------------------------------------------------

let temp = 50;
color = null
switch(true) {
    case (temp < 0):
        color = "#FFFFFF"
        break;
    case (temp <= 30):
        color = "blue"
        break;
    case (temp <= 50):
        color = "orange"
        break;
    case (temp <= 75):
        color = "orange red"
        break;
    case (temp <= 80):
        color = "yellow red"
            break; 
    case (temp >= 90):
        color = " super red hot"
        break;
    default:
        color = "hot"
}
console.log(color)