var greet = function mssg(){
    return "Hello World!"
}
console.log(greet()) // retruns Hello World

//but if we try to access mssg(): throws reference/not-defined error
//console.log(mssg())
// this is because the mssg() is self coped here means it can be executed but in its own execution context not globally

//!how to access self scoped functions:: bad practice one must not!!
var farewell = function mssg2(){
    
    mssg2()  //this will cause stack overflow, as this is infinite recurssion
    return "Bye World!"
   
}
console.log(farewell())      
