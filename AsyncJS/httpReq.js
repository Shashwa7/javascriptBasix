const request = new XMLHttpRequest();
//this request object we can actually use it to send a request to get some data.

//any change occurs wrt the request, right from making request to the server till getting response from the server for the request made.

//so we, can record all the states involved while making request to the server just by adding eventlistener  of type 'readystatechange'.

//'readyState' basically tracks the current state of our request
//state '0 - 2': means creation(open) and sending of request. 
//state '3': means downloading the responded data.
//state '4': means the request operation is completed and the data is received/downloaded from the server successfully and hence we can use them as per our need.

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);


    //checking if the response data is successfully recieved and hence we can use it accordingly
    //status '200'- just to be double sure and display data only if the data is recieved
    if (request.readyState === 4 && request.status === 200) {
        console.log('Data Recieved!');
        console.log(request.responseText);// to display the received data(JASON DATA);
        //responseText property contains the response data.
    }else if(request.readyState === 4){
        console.log("Couldn't fetch the data");
    }
//request.open(type of request, API endpoint url); 

request.open('GET', 'https://jsonplaceholder.typicode.com/todos2/');
//here we are using JSON Placeholder API ~ google it
//here we're specifying what the type of request is and from where we are making data requests.
// this is basically setting up a request not making request.

// inorder to send/make the created request we will use .send() method.

request.send();

//after executing this, go to 'network panel' in page inspect,  refresh the browser, and there you can check for the Response 

/*
  note:: 

  > there is a posibility that we can mention a wrong/non-existing api endpoint/ url, but still the response will reach a state of'4' but instead this time with an error code and without data.The status of such response/request will be '404', which indicates some error has occured during the request.

  > whereas we will see a status of '200' incase our request was made to the correct endpoint and data is recived successfully from the server.

  > refer this for more info:https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */