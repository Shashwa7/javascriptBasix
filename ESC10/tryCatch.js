try {
    const sum = 4 + 5;
    console.log(sum);
} catch{
    console.log('You messed up!');
}

//we basically telling JS that execute the code within the try{} block and if any error occurs then execute the code within catch block;

//take this example
try {
    console.log(bob + 'hi');
} catch{
    console.log('Invalid String format!!');
}

//o-p:: Invalid String format!!

//with ES10 we got an update where it is not necessary to pass the error as an argument in catch block we can directly declare our catch block. as show above.

//old way of try and catch 
try {
    console.log(bob + 'hi');
} catch (error) {
    console.log('Invalid String format!!\n' + error);
}

/*
o-p::
Invalid String format!!
ReferenceError: bob is not defined
*/