// how can we access the memory 
// and how can we store the memory 

// (2 types  of data types were defined)

// in js nothing like float/decimal , here a number is number whether a decimal or number

// 1. primitive   call by value  , jab bhi copy karte hai, toh uska orginal reference memory ka nahi deya jata, 
/*bulki uske copy ka reference deya jata hai , toh jo bhi changes hote hai vo copy mai hote hai*/

// 2. non primtive/reference : arrays , objects, functions  (memory mai inka reference allocate kiya jata hai)

// to define type of a varaible ,in js we dont (javascript is dynamically typed where we dont have to define)
// const hello = 234 i didnot tell to js that i am giving value in number or boolean


// symbols giving unique id 
// to the data type you want example here i am giving to String

// here we are giving value to the symbol in both id's still it is different even value is same 
// the symbol data type make unique id's even the value is same

// // the return type we get is having is datatype  same symbol
// const id1 = Symbol("name")
// const id = Symbol("name")

// console.log(id1===id) /*  =  8*/

// const bignumber = 234234234n


// // typeof of null is undefined
// the typoef of function is called function object , but it returns only as function



// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. earlier memory reserve and memory free , it was upto us what and where reserve and free  
// c language type of language.

// 2. Yes, the C programming language provides manual control over memory
// management, meaning it is up to the developer to allocate and free memory when needed.
// This is one of the key features that makes C powerful, but it also requires careful handling
// to avoid memory-related issues such as leaks or corruption.


// stack and heap memory

// stack (primitive)  where copy is taken as reference to change, stack memory is used in primtive type
// heap (non primitive)  where changes we do happens to original, heap memory is used in non primitive type



let myyoutubename = "helloyoutube"
let anotheryoutube= myyoutubename 

console.log(myyoutubename)

anotheryoutube = "hellofacebook"  /*hum ne idhar anotheryoutube ka reference myyouubtename liya tha, uska helloyoutube  value tha8*/
// on checking the original valuer remains same but the reference we have take is changes by our change

console.log(anotheryoutube)


let hello = {
    name : "hello",
    age :20,
    email :"hello@gmail.com"

}


let hello2 = hello
// whenever i change in hello2 in will direclty change in hello since both have same reference 
console.log(hello2.email)

hello2.email = "youtube@gmail.com"
// on change in 2
console.log(hello2.email)






// we can access the keys in object by objectname.key ,hello.email


