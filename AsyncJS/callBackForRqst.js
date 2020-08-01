//creating a request call back function

// passing function as an arguement
const getTodos = (callbackFunc) => {

    const rqst = new XMLHttpRequest();  //requestobject created

    rqst.open('GET', 'https://jsonplaceholder.typicode.com/todos'); //rqst created
    rqst.send(); //rqst been made

    //checking if rqst was made successfully
    rqst.addEventListener('readystatechange', () => {

        if (rqst.readyState === 4 && rqst.status === 200) {
            //               err           data
            callbackFunc(undefined, rqst.responseText);
            //here the error mssg is not defined but we have the data to display
        }
        else if (rqst.readyState === 4) {
            //               err              data
            callbackFunc('Request failed!', undefined);
            //here we do have an error mssg but due to rst failiure the data is not present.(so undefined)
        }

    });
};

//demonstrating the async execution of our code below;
console.log(1);
console.log(2);

//here we have http request that gonna take some time
//passinsg anonymous func as an argumnet, this anonymous func takes 2 sub-args err and data
getTodos((err, data) => {
    console.log('Callback Func triggered!');
    if (err)
        console.log(err);
    else
        console.log(data);
});
//this request will not gonna be blocking

console.log(3);
console.log(4);
console.log('Call back func about to trigger....');


