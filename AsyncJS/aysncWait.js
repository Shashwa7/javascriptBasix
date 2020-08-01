//async & await

/*
> So they're quite modern features and they basically allow us to chain promises together in a clean and much more readable way.

> And whenever we call an asynchronous function like getTodos it always returns a promise regardless of what it has as a code.

> instead of using .then() with fetch api func we will rather use await keyword infront of it, which has a basic purpose of intialising the response object only when the actual response has been received successfully with the data form the mentioned endpoint.

>as we have defined getTodos() as asynchronous func it will not block the flow of execution, in the mean-time while the request is waiting for the response other code/statements can be executed. 
*/
/*
//now getTodos has been declaread as async function
const getTodos = async () => {
    // grabbing data using fetch api

    const response = await fetch('todosFiles/justin.json'); //returns a promise as well
    console.log(response); //response object

    const data = await response.json(); //return promise as well

    console.log("Justin's data received: ", data); //recieved in JS object format
    /*note::
    > await is the keyword we use for chaining the promises, simillary like we did before using '.then()';
    
    > So await is going to stall/wait here again until this promise(response.json()) resolves.
    
    > Then we take the value we got when promise resolved and assign it to the 'data' variable.
    
    > So this looks a lot nicer than the stuff we did before.
    
    
    const response2 = await fetch('todosFiles/hugo.json');
    const data2 = await response2.json();
    console.log("Hugo's data received: ", data2);
};

getTodos();

*/
/*
const test = getTodos(); //test is nothing but a promise which is returned by getTodos();
console.log(test);
*/

//more cleaner approach
const getTodos = async (url) => {

    const response = await fetch(url);
    //throw our own error mssg
    if (response.status !== 200)
        throw new Error('Cannot Fetch the data!');

    const data = response.json();

    return data;
   
    //note:: You can directly console log the data here within the scope but if you are returning the data you have to use .then() inorder to use data as it is async func it always return promise, can't just directly console log it.
};

//purposefully miss typing the json file name in-order to check our thrown error mssg
getTodos('todosFiles/justin2.json')
    .then(data => console.log('Promise resolved: ', data))
    .catch(error => console.log('Promise Rejected: ', error.message));

    //in-order to display the thrown error we have to use the error.message property
    //error.message = 'Cannot Fetch the data!';