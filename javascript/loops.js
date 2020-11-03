let i = 1;

while(i <10){
    console.log(i)
    i++
}
console.log(i)
while(i > 0){
    console.log(i)
    i--
}
console.log(i)


// ==============================================
//use for loops instead of while loops


  //initial value; condition; incrimenter
num = 10 
for(let i = 0; i < num; i++){
    console.log(i)
}

for(; i < 20; i++){
    console.log(i)
}
z= 0
console.log(z)

while(z < 10){
    if(z > 5) break;
    console.log(z)
    z+++
}


//continue
for(let i = 0;i<20;i++){
    if(!(i % 2)) continue; // remember that the ! in front of something means that it is the opposite if that
    console.log(i)
}
//infinite loop warning!
let i = 0;
while(i < 10){
    if(i % 2 == 0) continue;//why infinite loop?
    console.log(i)
    i++
}


