const user = {
    username: "tanaram suthar",
    email: "tanaramsuthar@gmail.com",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website & your Email is ${this.email}`);
        
    }
}
// this === user;
// user.welcomeMessage();
user.username = "govind" 
// user.welcomeMessage() 
// console.log(this);


// function chai(){
//     let username = "tanaramsuthar"
//     console.log(this.username);
// }
// chai()


// const chai = function (){
//     let username = "tanaram"
//     console.log(this.username);
// } 
// chai();  // undifined

const chai = () => {
    let username = "tanaram"
    console.log(this.username);
}
// chai()

// // first way to write code
// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // perenthises lagane per return key word likhna padega 

// secound way to write code

// const addOne = (num3 ,num4) => num3 + num4

const addone = (num3 ,num4) => (num3 + num4)
// console.log(addone(4,5));

const addOne = (num3 ,num4) => ({username: "tanaram"})
// console.log(addOne(4,5))

const user2 = () => ({username: "govind suthar", email: "tanaram@gmail.com"});
console.log(user2());

