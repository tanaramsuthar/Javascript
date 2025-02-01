// console.log("H");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("s");
// console.log("h");

function sayHi() {
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayHi();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }


let result = addTwoNumbers(4, "5"); // 45
// console.log("result:", result); // undefined

function addTwoNumbers(num1, num2) {
   let result = num1 + num2;
   return result;
}
// console.log("result:", result); // 9

function logInuserMessage(username) {
    if(username === undefined) { // isko humne check kiya hai ki username undefined hai ya nahi
        console.log("please provide a username");
        return; // return define karne ke bad function se bahar aa jayega or function ko stop kar dega to uske bad koi bhi code run nahi hoga
}
return `${username} just logged in`;
}
// console.log(logInuserMessage());

function calcluatePrice(val1, val2, ...num1) {    // ...num1 is a rest parameter which is used to take multiple arguments in a function.
    return num1
  
}

// console.log(calcluatePrice(200, 400, 500,600));

const user = {
    username: "john",
    price: 200,
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "doremon",
    price: 399,
})

const myNewarray = [100,200,300,400] 

function returnSecoundValue(getArray){  
    return getArray[1];
}
// console.log(returnSecoundValue(myNewarray)); // 200
console.log(returnSecoundValue([100,200,300,400])); // 200
