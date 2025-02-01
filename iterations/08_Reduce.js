const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 2);

// let myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// },3)
// console.log(myTotal);



const shoppingCart = [
    {
        product: "milk",
        price: 20
    },
    {
        product: "bread",
        price: 10
    },
    {
        product: "sugar",
        price: 30    
    }
];

// let priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
let priceToPay = shoppingCart.reduce((acc, item) => {
    // console.log(`Total: ${acc} and item price: ${item.price}`);
    
    return acc + item.price;
}, 0);
// console.log(priceToPay);

