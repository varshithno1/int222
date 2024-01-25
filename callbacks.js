//^ Callbacks
    //* Synchronous Callback
    function parent(callback){
        callback();
        console.log("After Callback");
    }
    function child(){
        console.log("In callback");
    }
    parent(child);


    //* Asynchronous Callback
    function parent(callback){
        setTimeout(callback, 1000);
        console.log("After Callback");
    }
    function child(){
        console.log("In Callback");
    }
    parent(child);