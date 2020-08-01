/*
what is jason?
> it is a way of transferring data b/w the server and the client.
> It's just a string.The string is formatted in a way that looks like JavaScript objects with curly braces and key value pairs but is still just a string and that's all Jason.

> Essentially it's strings which look like JavaScript objects and it has to be a string because when a browser exchanges data with a server it has to be done in text format that is the form of data transfer and that is why we use this format Jason.

> inorder to use this jason data/string in object format , we must type cast it in JS object format.
> we can do this using JSON. parse(jason string);

>we can create our own custom jason file, and kindly note that  everything must be in double quotes
*/
const getTodos = (callbackFunc) => {

    const rqst = new XMLHttpRequest();  //requestobject created

    rqst.open('GET', 'https://jsonplaceholder.typicode.com/todos'); //rqst created
    rqst.send(); //rqst been made

    //checking if rqst was made successfully
    rqst.addEventListener('readystatechange', () => {

        if (rqst.readyState === 4 && rqst.status === 200){
            const data = JSON.parse(rqst.responseText);
            //parses this json string in array of objects
            callbackFunc(undefined, data);
        } 
            
           
        else if (rqst.readyState === 4) 
            callbackFunc('Request failed!', undefined);
        

    });
};

getTodos((err, data) => {
    console.log('Callback Func triggered!');
    if (err)
        console.log(err);
    else
        console.log(data); //this is actually a JS object not the JSON string/data
});

