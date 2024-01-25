// for loop
console.log("---for---");
// let m = 0;
// let j = 0;
for(let i = 0; i < 5; i++){
    // m = m + ((10 ** (j)) * i);
    // j++;
    console.log(i);
}
// console.log(m);


let str = "";
for (let i = 0; i < 5; i++) {
    str += i;
}
console.log(Number(str));

// while loop
console.log("---while---");
let j = 0;
while(j < 5){
    console.log(j);
    j++
}


// do-while loop
console.log("---do-while---");
let k = 0;
do{
    console.log(k);
    k++;
}while(k < 5)

// for in loop
console.log("---for in---");
let obj = {
    name : "Person",
    age : 10,
    class : "K22",
}

for(let key in obj){
    console.log(obj[key]);
}

// foreach
console.log("---foreach---");
let arr = [10, 2, 5, 5, 4];
arr.forEach(e => {
    console.log(e);
});


// How to call functions from objects
let newObj = {
    start : function () {
        console.log("start");
    }
}

newObj.start();

// constructor function
function Book(name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
}

let book1 = new Book("Book1", "Person1", 1999);
let book2 = new Book("Book2", "Person2", 2000);
console.log(book1);
console.log(book2);