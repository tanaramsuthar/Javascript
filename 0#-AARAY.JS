//  ----------   array ------

const myArr = [1, 2, 3, 4, 5, true, "tanaram"];

const colors = ["yellow","red","green","blue","black"];
// console.log(myArr[6]);

//      Array Methods

//   Push and Pop
myArr.push("Suthar");        // add element in last
myArr.push("Rajasthan")         //
myArr.pop();                 // remove last element
// myArr.pop();
// myArr.pop();

  // =========== Unsift and Shift

// myArr.unshift("shri");         // add element in first
// myArr.shift();                 // remove first element


// console.log(myArr.includes("tanaram"));   // check element is present or not in array // return true or false       //true
// console.log(myArr.inclide("10"));         // check element is present or not in array // return true or false          //false

// console.log(myArr.indexOf("tanaram"));       // check element is present or not in array // return index of element       //6

const newArr = myArr.join()


// console.log(myArr);
// console.log(typeof newArr);

// Slice and splice

// console.log("A", myArr);

const myn1 =  myArr.slice(1, 3) // Splice can't changes in orinal Array. 

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3) // Splice can Change in orignal Array.
// console.log(myn2);


const marvel_heros = ["Ironman", "Thor", "Hulk", "Captain America", "Black Widow" ]; 
const dc_hero = ["Superman", "Batman", "Wonder"];

// marvel_heros.push(dc_hero);  
// console.log(marvel_heros);  

// const allheros = marvel_heros.concat(dc_hero);
// console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_hero]; // Spread Operator to merge two array in one array.
// console.log(all_new_heros);

// ------- flat() method

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12 [13, 14, 15]]];

let my_another_array = another_array.flat(Infinity);     // flat() method is used to convert multi-dimensional array into single array.
// console.log(my_another_array);

console.log( Array.isArray("tanaram"));                  // isArray() method is used to check array or not. // return true or false
console.log(Array.from("tanaram"));                      // Array.from() method is used to convert string into array.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));            // Array.of() method is used to convert multiple variables into array.


