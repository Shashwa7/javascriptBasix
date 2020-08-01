//?IIFE : Immediately invoked function expression
//**functions once created invoked right-away

/*
? IIFE syntax

( 
 function () {
   statements
 }
)() -> invoking the created func expression  

* once can even use the invoking braces inside the function expression
? like this vvv
( 
 function () {
   statements
 }()-> invoking the created func expression  
)
*/
//this is fucntion expression
(function () {
    console.log("Hi I'm IIFE!")
})()

//* creates a local/block scope
//* we'll discuss this more when we'll learn about modules