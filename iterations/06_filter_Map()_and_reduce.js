// filter Map and Reduce

const coding = ["js", "ruby", "java", "python", "cpp"];
const values = coding.forEach((item) => {   // forEach value ko return nahi karta hain.
    // console.log(item);
    // return item
});
// console.log(values); // unndefined


//   filter values ko return karte hain.
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNums.filter((num) => num > 10); 
// let newNums = myNums.filter((item) => (item > 4)); 

// let newNums = myNums.filter((num) => { return num > 4})  //   filter me agar scope keyword ka use karte hain toh RETURN ka use karna hogo.

// console.log(newNums);


// const books = [
//     { title: 'book one', genre: 'Fiction', Publish: 1981,
//     editino: 2004},
//     { title: 'book two', genre: 'Non-Fiction', Publish: 1984,
//     editino: 1999},
//     { title: 'book three', genre: 'history', Publish: 1990,
//     editino: 2000},
//     { title: 'book four', genre: 'Science', Publish: 1985,
//     editino: 2010},
//     { title: 'book five', genre: 'history', Publish: 2002,
//     editino: 2014},
//     { title: 'book Six', genre: 'Fiction', Publish: 1988,
//     editino: 2002},
//     { title: 'book Seven', genre: 'Non-Fiction', Publish: 2001,
//     editino: 2012},
//     { title: 'book eight', genre: 'Poetry', Publish: 1958,
//     editino: 1996},
//     { title: 'book nine', genre: 'Political', Publish: 1978,
//     editino: 2011},
//     { title: 'book ten', genre: 'Non-Fiction', Publish: 2000,
//     editino: 2009},
// ];
// let userBooks = books.filter((bk) => bk.genre === 'history');
// userBooks = books.filter((bk) => { return bk.Publish >= 2000});

// console.log(userBooks);

const students = [
    {
        fullName: "tanaram", class: "firstYear", subject: "Arts",
    },
    {
        fullName: "yuvraj", class: 11, subject: "Science",
    },
    {
        fullName: "Radha", class: 11, subject: "Arts",
    },
    {
        fullName: "Usha", class: 12, subject: "Commerce",
    },
];

// let user = students.filter((bk) => bk.class === 11);
//  user = students.filter((bk) => { return bk.fullName === "yuvraj"});
// console.log(user);

const contacts = [
    {
        name: "tanaram", number: "800126571",
    },
    {
        name: "govind", number: "4484844655",
    },
]

let user = contacts.filter((uc) => {return uc.name == "tanaram"})
console.log(user);
