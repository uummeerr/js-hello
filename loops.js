// iterations / loops
// for (let i = 0; i < 10; i++) {
//     const element = i;
 
//     if(i==5){
//         console.log("5 is best number")
//     }
//     if(i==4){
//         // console.log("4 is best number")}
   
//     if(i==8){
//         // console.log("8 is best number")
//     }
 
//     // console.log(element)
//     }

//   loops working first you declare the varaible and then it check the condition and then goes to the block code to execute and then increment 
//   and then conditional and then block to execute


    // so here is the question which will execute first if i write console.log(element) at last
    // it will print the number all as it was working but with if statement it will print the if statement and then the number 
    // that is "4 is the best number" and then "4"




    // same is the case if i write just after the the varaible declaration the it will print the  number first and then the statement
    // "5 is the best number" and then "5"


for (let i = 0; i < 10 ; i++) {
// console.log(`outer loop value ${i}`)
    for (let j = 0; j<10 ; j++) {
    //   console.log(`inner loop value ${j}  and outer loop value ${j}`)
      
        
    }
}


// multiplying tables from 0 to 10
for (let i = 1; i <=10 ;i++) {
   
    // console.log(i)
    for (let j = 1; j <= 10; j++) {
      
        // console.log("i" + "j" + i*j) 
        // console.log(i +"*" +j +"=" + i*j)
        // console.log(i + "*" + j + "=" + i*j)
        
    }
    
}


// // loop on arrays
// const hello =  ["hello", "uncle", "world"]
// // console.log(hello.length)

// for (let i = 0 ; i < hello.length; i++) {
//     const element = hello[i];
// console.log(element)  
// // console.log(i)  
// }
//   Array.length >> no of elements in the array not indexx 0123


// break and continue
// // control flow ko break karna> break 
// for (let h = 0; h < 10; h++) {
//     console.log(`value of number is ${h}`)
//     if (h==5) {
//         console.log("detected 5")
   
//    continue
//     }
     
// }
 


// continue and non continue mai yehi farak hai ki continue 5 ko print nahi karta hai
// while as without using continue 5 print bhi hota hai aur condition mai  print hota hai



// if not increment or decrement in the loop , loop will be infinite



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// while loop and do while loop

// loop define
// loop condition
// loop increment

// while (condition) {
    
// }

let hello = 1
while (hello< 12){
    console.log(`printing numbers from1 to 12 ${hello}`)
   hello= hello+1
}





