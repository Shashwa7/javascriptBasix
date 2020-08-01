//callBack function
//basicall passing function as an argument in other function
const operation = (callbackFunc) => {

    let a = 5;
    let b = 21;

    // here intializing a, b and passing as arguments in callbackFunc();

    console.log('Result: ', callbackFunc(a, b));
    //here it will invoke add func and the returned result will be displayed
};

//passing function that adds two numbers and returns the result
operation(function (a, b) {
    return a + b;
});