let score = "234"


// value comes from the form if it is in string 
// not having guatanee what is its typeof

console.log(score)
console.log(typeof score)
console.log(typeof(score))  //we can also write with this typeof

// if i want to change or keep the operations only in number 
// i have to change this from string to number 

let valueinnumber= Number(score)
console.log(typeof valueinnumber)


// case 2 

let scoree = "33abc"
// if we try to convert this , this can be easily converted by the type we get is Nan (not a number)
console.log(scoree)
console.log(typeof scoree)

let valueinnumberr = Number(scoree)
console.log(valueinnumberr)
console.log(typeof valueinnumber)

// case 3  null converting to number
let blue = null
console.log(typeof scoree)
let valueofthis = Number(blue)
console.log(valueofthis)

// // case 4
//  undefined to Number
// we are getting as Nan 


// case 5
//  boolean to Number
// we are geeting 1 or 0



// case 6 string to Number

let hello = "keyboard"
let conversion = Number(hello)
console.log(hello)
console.log(conversion)



// // converting  value to boolean 

let hello2 = 1
let booleanhello = Boolean(hello2)
console.log(booleanhello)


// string to boolean
// we get true

// when null to boolean
// false

// when "" null to boolean false
// when "asdf" string to boolean true


let bluee = null
let blueee = Boolean(bluee)
console.log(blueee)



// number to String
// number same  but change type of it
let stringg = 1234
let stringnumber = String(stringg)
console.log(stringnumber)
console.log(typeof stringnumber)






let bl = "hitesh"
let newblue = Number(bl)
console.log(newblue)



