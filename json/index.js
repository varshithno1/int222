const data = {
    name : "Jhon",
    age : 30,
    city : "New York"
}

console.log(data);
const jsonString = JSON.stringify(data);
console.log(jsonString);
const parsedJSON = JSON.parse(jsonString)   
console.log(parsedJSON);