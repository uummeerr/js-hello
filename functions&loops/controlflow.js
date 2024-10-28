//  logic control / control flow
// multiple conditions  
// code should run on condidtion basis

// logical operator (and && , or ||)


// if(condition , 2==2  ){
//     code will only execute if condition is true
// }
// comparision operator  , < , > , =>, =<(2<=2 2 equal or lesser than 2) , == ( equal to ) , != iequality(3!=2),  === also check type !== strict inequaltiy check with data type
// // else > keyword > no need to write the  condition 

// let condition = 122
// if(condition==12){
//     console.log("hello")
// }else{
//     console.log("not printing")
// }



// // conditional statement either one or 2nd

// let score = 2343
// if(score>12){
//     console.log("corect info")
// }else{
//     console.log("wrong info")
// }

// const scoree = 200 
// if(scoree > 100){
//     var global = "flying"
//     console.log(global)
// }
// console.log(global)

// var ka scope completely global hai


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// implicit scope   >>>>>  moslty wirrten in one line aur iska scope hum mann lete hai
// // const hello = 234
// // if (hello<500) console.log("testing implicit scope")
const hello = 1234
if (hello>23) console.log("ok number")


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
// let ceko = 1200
// if (ceko<300){
//     console.log("print 300")
// }else if(ceko < 500){
//     console.log("print >500")
// }else if(ceko < 1160){
//     console.log("print 1160")
// }else{
//     console.log("print equal to 1200")
// }

// //  checking multiple condition at same time
// logical operators (&& and operator and or || or operator)

// const userloggedIn =  true
// const debitcard = true
// //   >>> checks both conditions should true (impersand &)

// if (userloggedIn && debitcard){
//     console.log("allow to buy course")
// }else{
//     console.log("off")
// }

// // one of the condition should true 


// const userlogged =  false
// const creditcard = false

// if(userlogged || creditcard){
//     console.log("lets go to the course")
// }
// else{
//     console.log("not eligible")
// }







// // // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++s
// // switch case statement  another format of if else multiple statement
// // if there is a value if we have to go through it multiple condition we can use this
const hc = 120
switch (hc) {
    case 11: console.log(" numer is less than 10")
        
        break;
    case 15: console.log("number is equal to 100")
        
        break;
    case 120: 
    const h = 12 
    console.log(h)
        
        break;

    default: console.log("nothing")
        break;
}



// string example


const anme = "umer"
switch (anme) {
    case "ume":console.log("name is empty")
        
        break;
    case "umer":console.log("name is full")
        
        break;

    default: console.log("nothing to do with name")
        break;
}


// # if we didnot write break it will execute all the conditins after that except default value  
// # (shift+alt+down arrow) 




// // truthy value
// const userEmail = "hitesh"

// if(userEmail){
//     console.log("got email")
// }
// else{
//     console.log("dont have user email")
// }






// // false value
// // false, 0 , -0, BigInt 0n, null , undefined, NaN , ""


// // // truthy values
// // {}, [],"0", "false", " ", function(){} empty function



// // // if it is a  empyt array 
// // const usernumber = []

// // if (usernumber.length ===0) {
    
// //     console.log("not a email")
// // }


 const arr = []
 if (arr.length===0) {
    console.log("array is empty")
    
 }


 if (Object.keys(arr).length===0) {
    console.log("object is empty")
    
 }
// // //  if it is a object
// // // is it empty or not

// // const hello = {}
// // if (Object.keys(hello).length===0) {
// //  console.log("objects")    
// // }else{
// //     console.log("not a object")
// // }



// // object.keys(objectname) >>> object is used to call the object , keys to acess the keys of  ( object name) { hello : "umer "} get convete to p["hello"]
// object.keys(arr)  >> will return an array for me and then to access all it we an do the same thing as did with array .lenght property
 
// +++++++++++++++++++++++++++++++++++++

// // false == 0
// // 0 ==""
// // false ==""


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// // nullish coalescing  operator ( null and )

// agar error aaye to kaise asign ho vo fir error ki jagah value ko assign karna hai vo kaise assign ho


 const a= 500 ?? 100 ?? 200
 const b = null ?? 200
 const c = undefined ??100 ?? undefined
 

 console.log(a)
 console.log(b)
 console.log(c)


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++




// // ternary operator > if else
// const hello = 122
// hello == 20 ? console.log("less than 20") : console.log("more than 40")


// // you  cannot assign 99 value to the icetea in if else statement 
// const icetea = 100
// icetea > 99 ? console.log("number is lesser than 100 ") : console.log("number is exact as given")


 const ceko = 100
 ceko ==99 ? console.log("number is lesser than 100") : console.log("number is  greater than 100")





