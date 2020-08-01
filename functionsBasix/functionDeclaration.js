
// groot(); calls the function groot()
//function declaration
function groot(){
 console.log("hello, Shashwat!");
}

groot();

//shashwat(); will throw an error, can't be call before declaration.
//function expression
const shashwat = function(){
    console.log("hello, Groot!");
}

shashwat();

//note: we can call the function groot() before  its definition
// but we can't call shashwat() before its function definition.