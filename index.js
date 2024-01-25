// Function Level Scope (VAR):
    // function func(){
    //     if(true){
    //         var scopedVar = "I am function scoped";
    //     }
    //     console.log(scopedVar);
    // }

    // func();
    // // console.log(scopedVar); //ERROR: Scope resolution error (Function level)
    
// Block Level Scope:
// I - (LET):
    // function func(){
    //     if(true){
    //         let scopedVar = "I am function scoped";
    //         console.log(scopedVar);
    //     }
    //     // console.log(scopedVar); // ERROR: Scope resolution error (Block level)
    // }

    // func();
    // // console.log(scopedVar); //ERROR: Scope resolution error`

// II - (CONST): {it is immutable}
    // function func(){
    //     if(true){
    //         const scopedVar = "I am function scoped";
    //         console.log(scopedVar);
    //     }
    //     // console.log(scopedVar); // ERROR: Scope resolution error (Block level)
    // }

    // func();
    // // console.log(scopedVar); //ERROR: Scope resolution error`

    
// --------------------------------------------------------------------
// function func(){
//     if(true){
//         var funcScoped = "i am function scoped";
//         let blockScopedlet = "i am block scoped";
//         let constblockScopedlet = "i am block scoped and constant";
    
//     }
// }
// --------------------------------------------------------------------



// Shadowing:
    // var variable = "I am global";
    // function func(){
    //     var variable = "I an local";
    //     console.log(variable);
    // }
    // func();
    // console.log(variable);

// Hoisting:
    // // Declaration are hoisted and initialized with a default value (undefined)
    // console.log(x); // undefined
    // var x = 5;
    // console.log(x); // 5

    // // Declaration are hoisted not intialized
        // console.log(x); // ERROR: cannot access 'x' befor initialization
        // let x = 5;
        // console.log(x); // 5

        // console.log(x); // ERROR: reference error not declared
        // //  let x = 5;
        // console.log(x); // 5
