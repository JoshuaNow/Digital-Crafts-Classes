let a = 10 //assigns
a += 10 //adds-assigns
a -= 2 //subtract-assigns
a % 2 //modulus
a++ //adds 1 assigns
a-- //subtracts 1 assigns

//Comparison
  let a = 10
  a == 11 //false
  a == 10 //true
  a == '10' // true ? == is a lose comparison 

  a === 10 //true
  a === '10'//false

  a != 11 //true
  a != '10' // false

  a !== 10 //false
  a !== '10' //true

  a > 11 //false
  a > 10 //false
  a > 2 //true

  a < 10 //false
  a < 2 //false
  a < 11 //true

  a<=10 //true 
  a <= '10' //true you cannot do a strict comparison here you
  a <= Number('10')
  
  a >= 10 //true
  a >= '10' //false

  a == 'string type'//false no error
  a != 'any other type' //true no error
  a > 'something else' //false



  //logical
  let a = 10, b = 20, c = 30
  //And
  a == 10 && b == 20 // true           //better to use strict comparison
  a == 10 && b == 'not 20' //false
  a == 10 && b == 20 && c == 30 // true
  //Or
  a == 10 || b == 'not 20' // true
  a == 'not 10' || b == 'not 20'//false
  a != 'not 10' || b == 'not 20' //true            // || === or in python

  //combining or and
  a == 10 || b == 20 && c == 'not 30' //true?
  /*  
      wrapping two expressions 
      in a parenthesis makes 
      it a single expression
  */
  (a == 10 || b == 20) && c == 'not 30' //false

  //Not
  !(a == 10) //false
  !(a == 11) // true
  !(a != 10) // true
  !(false) // true


console.log(a == 10 || b == 20 && c == 'not 30')//true
console.log((a == 10 || b == 20) && c == 'not 30') //false

