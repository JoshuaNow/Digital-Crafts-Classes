// function myFunc( para1, para2, para3) {
//     return (para1 + para2 + para3)
    
// }

// myFunc(5,5,5)

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const theFunc = function(a,b,c){
//     return a+b+c
// }

const nextFunc = function(subFunc,aNumber){
    for(let i = 0 ; i< aNumber ; i++){
        console.log(i)    
    }
    subFunc()
}
// these are the same
// const nextFunc = function(subFunc,aNumber){
//     for(let i = 0 ; i< aNumber ; i++) console.log(i)
// }

nextFunc(function(){
    console.log("Yeehaw")
},20)

nextFunc(function(){
    console.log("Hubba Hubba") //not usable anymore
},2)

const anotherFunc = function(){
    console.log("I am here")
}
nextFunc(anotherFunc(), 12) //this causes an error
nextFunc(anotherFunc, 12) // this doesn't
