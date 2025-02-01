
let a = 300
if(true){
    let a = 10   
    const b = 20
    var c = 30            // this is a global variable
    // console.log("INNER:", a);
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c);

// console.log(a);


function one(){
    const username = "tanaram"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    
    two() 
}

one() 

if(true){
    const username = "tanaram"
    if(username === "tanaram"){
        const website = " youtube"
       // console.log(username + website)
    }
    // console.log(website);
    
}
// console.log(username);


// ========== interesting ========

function addOne(num) {
    return num + 1
}
console.log(addOne(2));

// addTwo(5)  
const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5));