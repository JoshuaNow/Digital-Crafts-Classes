let myArr = [10,20,30,40,50,60,70,80,90,100]

console.log(myArr[3])

console.log(myArr[2]+myArr[5])

myArr.push("a","b","c","d")

console.log(myArr)

let firstItem = myArr.shift()

console.log(myArr)

console.log(myArr[9]+myArr[10]+myArr[11]+myArr[12])

console.log(myArr.join(""))
let res = "";
v= 0
myArr.forEach(function(v){ res+=v})
    console.log(res)

myArr.sort()