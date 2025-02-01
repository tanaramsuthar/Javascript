// for of

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of arr) {
//   console.log(num);
}

let greetings = "hello world";
for (const greet of greetings) {
    // console.log(`Each char of ${greet}`);
    // break;
    // continue
};


// Maps 

let map = new Map()

map.set('IN', "INDIA");
map.set('USA', "UNITED STATES OF AMERICA");
map.set('FR', "FRANCE");
map.set('RS', "RUSSIA");

map.set('A', 97);
// console.log(map);

// console.log(map.get('A'));
// console.log(map.size);

for  (const key of map) {
    // console.log(key); 
}

for(let [key, value] of map) {
    // console.log(key, ':-' , value);
};

// const myObeject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman',
// };
// for(let [key, value] of myObeject){
//     // console.log(key, ':-', value);
// };


