const userEmail = []

if(userEmail){
    // console.log("Got user email");
} else{
    console.log("Don't have user email");
}


// Falsy value's
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// Truthy Value's
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty");
}

// Nullish Coalescing Opreator (??): null undefined

// let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 15


// console.log(val1);

// Terniay opreator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
