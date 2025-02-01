const coding = ["js", "ruby", "java", "python", "cpp"];


// callBack Function ka name nahi hota. yahi use bas parametre ki jaurat hoti hain.
// forEach value ko return nahi karta.

coding.forEach( function (val) {      // In normal function.
    // console.log(val);
});

coding.forEach((item) => {           // in Arrow function.
    // console.log(item);
});

function printMe(item) {
    // console.log(item);
};

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

let myCoding = [
    {
        languageName: "javascript",
        languageFileName: "JS",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
];

myCoding.forEach((item) => {
    // console.log(item.languageName);
});

