lear
// singleton object
// object.create

// Object literals

let mySym = Symbol("key1");

const Jsuser = {
    name: "tanaram",
    "fullname": "tanaram Suthar",
    [mySym] : "key1", 
    age: 18,
    location: "nagour",
    email: "tanaram@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(Jsuser.email); 
// console.log(Jsuser["fullname"]);                    // if key is string then use this method to access the value of key in object literals 
// console.log(typeof  Jsuser.mySym);     // undefined
// console.log(Jsuser.mySym);

Jsuser.email = "tanaramsuthar01@gmail.com";         // it will update the value of email key in object literals
// Object.freeze(Jsuser);                              // it will prevent the object to be modified 
// Jsuser.email = "tanaram@microsoft.com"; 
//  console.log(Jsuser);
 

Jsuser.greeting = function(){
    console.log("Hello JS User");
}
Jsuser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);     // this keyword is used to access the object literals key value 
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());
