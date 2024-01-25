//^ Normal function
    let mul = function (a, b) {
        return a * b;
    }

    //& Invocation
    let product = mul(2, 3);
    console.log(`The product is: ${product}`);


//^ Arrow function
    let subtract = (a, b) => {
        return a - b;
    }

    //& Invocation
    let diff = subtract(5, 2)
    console.log(`The difference is: ${diff}`);


//^ Error Handeling
try {
    throw new Error("ERROR!!");
} catch (e) {
    console.log(`The error is: ${e}`);
}