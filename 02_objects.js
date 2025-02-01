// const tinderuser = new Object();
const tinderuser = {}

tinderuser.id = "123abc";
tinderuser.name = "John";
tinderuser.age = 25;
tinderuser.bio = "I love dogs";

// console.log(tinderuser); 

const regularuser = {
    email: "John@google.com",
    fullName: {
        userFullName: {
            firstName: 'john',
            lastName: 'carpenter',
        }
    }
}

// console.log(regularuser.fullName.userFullName); //


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2}

const obj3 = Object.assign({}, obj1, obj2) // merge two objects into one object.
// console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// const target = { a: 1, b: 2 };        // target object
// const source = { b: 4, c: 5 };        // source object

// const result = Object.assign(target, source);
// console.log(target); // { a: 1, b: 4, c: 5 } // target object itself is changed.

// console.log(result === target); // true 

// console.log(tinderuser); 
// console.log(Object.keys(tinderuser));     //to access the keys of the object 
// console.log(Object.values(tinderuser));   //to access the value of the object
// console.log(Object.entries(tinderuser));  //to access the key value pair of the object 



const course =  {
    courseName: "JShindi",
    coursePrice: 1000,
    courseInstructor: "Hitesh Sir"
}

const {courseInstructor: instructor} = course
console.log(instructor); // Hitesh Sir


// {
//     name: "John",
//     courseName: "JShindi",
//     price: 1000,
// }

