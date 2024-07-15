let num1 = 12
let num2 = 8

//let total =  num1+num2
console.log(total)

let total = 1000+1000
console.log(total)

let num5 = 10
let num6 = 71

let compare = num5>num6
console.log(compare)

//let bucket1 = 2+6*2

//let total = bucket1
//console.log(total)
//So, bucket1 will be 14.

//let bucket2 = (2+6)*2
//let total = bucket2
//console.log(total)
//bucket2 will be 16.

//let bucket3 = (3+5) < 9
//let total = bucket3
//console.log(total)
//This comparison (8 < 9) is true, so bucket3 will be true.

//let bucket4 = 12=="12"
//console.log(bucket4)
//JavaScript performs type coercion here, converting the string '12' to a number 12 before comparison. The values are equal, so bucket4 will be true.
//let bucket5 = 12 ==="12"
//console.log(bucket5)
//Unlike ==, === checks both value and type. Here, the types are different (number vs. string), so bucket5 will be false.
let bucket6 = 2 + 4 + "3"
console.log(bucket6)
//JavaScript converts the number 6 to a string when concatenated with "3". Therefore, bucket6 will be the string "63"