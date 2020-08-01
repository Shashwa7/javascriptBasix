'use strict' //prevents var leakage -- remove this to see the if var leakage happens
function x(){
    //! not mentioning the type
    y = 12
    return y
}

//** console.log("Before Exe: ",y) if we try to acess y now, an error will be thrown: y undefined (reference error)
console.log("During Exe: ",x()) 
console.log("After Exe: ",y) //now if we try to access y, which was suppose to be local to the function x and shouldn't be accessible,  is indeed accessible here. As we didn't mention the type for 'y', while the x() was executing JS was looking for its type/declaration (var/let/const) as nothing was mentioned locally,it proceeds for checking it in the global scope and then again surprisingly didn't find any declaration for y, then finally it globally hoisted the var y and overwrites it with value mentioned in the function x

//? solution to the var leakage: mentioning 'use strict' keyword in the beginning of every js file to prevent JS for hoisting any var by itself, So now, if user forgets to mention the decalration type the JS will throw the reference error