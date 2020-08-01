//newer way of making request for getting data.
//fetch api alternative for xmlhttprequest().
//easier and better approach

//this returns a promise
//       resource/endpoint/url
fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
    console.log('Resolved', response);
    /*
    we can't do parsing directly like this
    const data = response.json(); 
    */
    return response.json();//returns promise

    //So, we must/have to use .then() to fetch the json string in the form of JS object
}).then(data => {
    console.log(data);
}).catch((error) => {
    console.log('Rejected', error);
});


//here in this case even if the request fails due to wrong url the promise will be resolved but with the status of '404';
//fetch api will throw error only when there is any network error/ or can't reach the api/server failiure.
// fetch api returns a response object in case of resolved promise.
//if you wanna see the data that we have recieved, kindly click on proto and look for json, which means you can use json() method with the received response object inorder to see the received data.
// it similar to parsing JSON data that we did in our earlier cases
//response.json() returns a promise
//inorder to read the data in JS object format we must use.then(data) for the corressponding promise.