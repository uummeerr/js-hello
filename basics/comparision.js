

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 <= 1)
// console.log(2 >= 1)            it is >= not =>
// console.log(2 == 1)
// // console.log(2 != 1)      =!  syntax error



// we can write 2 as 02 not to write this beacuse it may be confusing

// datatype should be same when comparing



// with undefined

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

// with null 

console.log(null == 0)
console.log(null > 0)
console.log(null >= 0)



// undefined >= 0 is false because undefined converts to NaN, and any comparison with NaN returns false.
// null >= 0 is true because null converts to 0, and 0 >= 0 is a true statement

// gets converted into nan


// // null is often used to represent the absence of any value (it's an intentional "nothing" or "empty" value).
// // When converting null to a number, JavaScript interprets this "absence" or "nothingness" as 0.
 
// gets converted into 0 


// strict equality check   checks  also data types

console.log(3==="3")