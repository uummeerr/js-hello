// const hello = 234
// the type of this varaible is number 
// but if i want only it should be number 
// so i can use number Object


// const balance = new Number(100)

// console.log(balance.toString())

// console.log(typeof balance)  
// // so actually here the when we tried to convert number into string there is not original refernce taken



// const hello = new Number(1234)
// console.log(hello)

// console.log(hello.toString().length)
// console.log(typeof hello)




// let he = new String("str")
// console.log(typeof he)
// console.log(he instanceof Number)
// console.log(he instanceof String)





//++++++++++++++++++++++++++++++++++++++++maths++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.round(4.3))
console.log(Math.round(4.4))
console.log(Math.round(4.5))    //  simply round off
console.log(Math.ceil(4.2))     // round off to top integer
console.log(Math.floor(3.8))     // round off to lowest integer
console.log(Math.sqrt(3))         //squareroot 
console.log(Math.min(3,4,5,6))      // in array to min number and max
console.log(Math.max(3,4,5,6))



// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-++-+-+-+-+-
// console.log(Math.random())    // value in between 0 and 1

// console.log((Math.random()*10)+1)
// console.log(Math.floor(Math.random()*10)+1)


const max = 20
const min  = 10


 
// console.log(Math.floor(Math.random() *(max - min + 1))) + min

// // console.log(Math.floor(Math.random()*(max - min)+ 1))


// console.log(Math.random()*(max - min + 1))+min


// console.log(Math.floor(11))



// console.log(Math.floor(Math.random()*(max-min+1) +min))



const  maxx = 6
const minn = 1

console.log(Math.floor(Math.random()*(maxx-minn+1)+minn))