// Defining an array
let fruits = ["apple", "banana", "orange", "grape"];
//              ^          ^        ^          ^
//index -       0          1        3          4

// Acessing elements from array ( array[index] )
console.log(fruits[0])

// Adding elements to an existing array at the end ( it is a destructive method )
fruits.push("kiwi");
console.log(fruits);

// Adding elements to an existing array at the front ( it is a destructive method )
fruits.unshift("mango");
console.log(fruits);

// Removing elements from an existing array at the end ( it is a destructive method )
fruits.pop();
console.log(fruits);

// Removing elements from an existing array at the front ( it is a destructive method )
fruits.shift(``);
console.log(fruits);

console.log(fruits.indexOf("apple"));

// Reverse an array ( it is a destructive method )
fruits.reverse();
console.log(fruits);

// Looping over an array using foreach
fruits.forEach(e => {
    console.log(e);
})

// Splicing an array [Modifies original array]
console.log(fruits);
let spliced = fruits.splice(3, 1);
console.log(spliced);
console.log(fruits);

// Slicing an array [Doesn't modify original array]
console.log(fruits);
let slice = fruits.slice(0, 1);
console.log(slice);
console.log(fruits);

// Concating arrays
let moreFruits = ["grapefruit", "pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

