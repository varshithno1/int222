//^ setTimeout
let func1 = () => {
    console.log("Timedout by 2s")
}

setTimeout(func1, 1000);

//^ setInterval
let interval = setInterval(func1, 1000);


//^ clearInterval
setTimeout(() => {
    clearInterval(interval);
}, 5000);
