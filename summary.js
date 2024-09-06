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

// the return type we get is having is datatype  same symbol
const id1 = Symbol("name")
const id = Symbol("name")

console.log(id1===id) /*  =  8*/

const bignumber = 234234234n


// typeof of null is undefined
// the typoef of function is called function object , but it returns only as function



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



