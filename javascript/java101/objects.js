//they can by used almost like a dictionary like in python
let myObj = {}

let aboutMe = {
    name:"Clint",
    age:38,
    tall:false

}



let source = ""
console.log(aboutMe)

console.log(aboutMe.name, aboutMe.age)
console.log(aboutMe[source])


aboutMe.gender = "Male"
console.log(aboutMe)

aboutMe.name += " F. "

console.log(aboutMe)


delete aboutMe.tall

console.log(aboutMe)



for(attribe in aboutMe){ //attrib it can be anything like a variable
    console.log(attribe)
    console.log(attribe, aboutMe[attribe])
} 
