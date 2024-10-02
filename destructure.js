

// objects de structure


// const hel ={
//     na : "umer",
//     class : 12,
//     inst :"isut"
// }

// console.log(hel.name)
// console.log(hel.class)

// let na = hel.name
// console.log(name)


// What happens: You are accessing the hel.name property and storing it in a variable name manually. If you need other properties (class, inst), you would have to repeat the same steps for each property.
// 2. Destructuring:
// With destructuring, you can extract all the needed properties from the object in a single step:
// What happens: In one line, you're "unpacking" the name, class, and inst properties from the hel object. This is shorter and more efficient than manually writing each property.

// Key Differences:
// Multiple Values at Once:

// Manual Definition: You need to define each property one by one, which gets repetitive and messy if you have many properties.
// Destructuring: You can extract multiple properties in a single line, making the code cleaner and more concise.
// Less Repetition:

// Manual Definition: You repeat the object reference (hel.name, hel.class, etc.) each time you need a property.
// Destructuring: You only mention the object once, and it extracts all the values at once, reducing repetition.
// Renaming Variables:

// With destructuring, you can rename properties if needed. For example, if you want to use className instead of class, you can rename it during destructuring like this:
// javascript
// Copy code
// const { class: className } = hel;
// In manual definition, you'd have to do something like:
// javascript
// Copy code
// let className = hel.class;
// Clarity:

// Destructuring is more readable when you need to extract multiple properties, and it's clear from the structure what values you're unpacking.
// With manual variable definition, especially when there are many properties, it can become harder to maintain or read at a glance. 



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//sconst { property1, property2 } = object;


// The curly braces {} on the left side indicate that you want to destructure (unpack) properties from an object.
// Inside the curly braces, you list the properties of the object that you want to extract.
// The variable names on the left side (property1, property2) should match the property names in the object you're unpacking from.
// The object itself goes on the right side of the assignment.

const h = {
    name :"umer",
    age : 21,
    school : "iust"
}

const { name:naam,age,school} = h

console.log(naam )


xml , json 
string > keys and values in string
{
    name : "umer",
    age : 231,

// }JSON Structure:
// Keys: Always written as strings inside double quotes (").
// Values: Can be in several data types such as:
// String (text data)
// Number (integers or decimals)
// Boolean (true or false)
// Array (a list of values)
// Object (a nested object)
// Null (a special value that represents "no value")


// {
//     "name": "Alice",              // String
//     "age": 25,                    // Number
//     "isStudent": false,           // Boolean
//     "courses": ["Math", "Science"], // Array of Strings
//     "address": {                  // Nested Object
//       "city": "New York",
//       "zip": 10001
//     },
//     "graduationYear": null        // Null
//   }

  


//   JSON uses key-value pairs and is often preferred in web applications because it is lighter and more concise.
// XML uses tags to define elements and is still used in many systems, especially for configurations and some legacy systems.




// <person>
//   <name>Alice</name>
//   <age>25</age>
//   <address>
//     <street>Main Street</street>
//     <city>New York</city>
//     <zip>10001</zip>
//   </address>
// </person>
 
// example of xml format


// <person>
//   <name>Alice</name>
//   <age>25</age>
//   <address>
//     <street>Main Street</street>
//     <city>New York</city>
//     <zip>10001</zip>
//   </address>
// </person>



api may in arrays format

[
    {},
    {},
    {},

]


// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// You Make a Request:
// When you visit a website and ask to see pictures of dogs (e.g., by clicking a button or loading a page), your browser sends an API request to a server.
// 2. The Server Responds with JSON:
// The server receives this request, retrieves the relevant data (which could be the URLs or file locations of dog pictures), and sends back a JSON response.
// This JSON response contains data, but not the actual pictures. Instead, it could have the URLs or links to where the images are stored.

// {
//     "images": [
//       { "url": "https://example.com/dog1.jpg" },
//       { "url": "https://example.com/dog2.jpg" },
//       { "url": "https://example.com/dog3.jpg" }
//     ]
//   }
  


//   3. Your Browser Processes the JSON:
// Once your browser (or the JavaScript running in your browser) receives the JSON data, it doesn't show the JSON directly on the screen.
// Instead, your browser uses the URLs or data in the JSON file to load and display the actual images.
// 4. Displaying the Images:
// Your browser takes the image URLs from the JSON response, makes additional requests to the URLs to fetch the images, and then renders the images on the page.