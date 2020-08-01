//block scope vs func scope

//var is by defalut func scope infact almost everything is func scoped in JS except let & const
if( 2 > 1){
    //fun scoped
    var y = 12
}
console.log(y) // y is accessible here also, no error will occur 

//!this is not the case when we are iterally talking aboout function scope, check out the example given below

function greet(){

    var mssg = "Hello World :)"
    return mssg
}
//!console.log(mssg)
//? if we do console.log(mssg) here even before greet() execution  it will surely throw the reference error

//** So no matter it is var it can't be accessed if it is block scoped 
let mssg = greet()
console.log(mssg)



//block scoped mean all vars created within '{}' is not accesible outside '{}', this can be achieved by declaring our varibles using 'let' & 'const'

if(4 < 8){
    let x = 12
    const m = 123
}

//! console.log(x, m)  //throes reference error