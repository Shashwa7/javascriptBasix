console.log(1);
console.log(2);

//async func
setTimeout(() => console.log('Fetching data from DB!'), 2000); // 2000ms = 2s;
console.log(3);
console.log(4);
console.log(5);

/*
o-p:

 1
 2
 3
 4
 5
undefine
Fetching data from DB!

// here we can observe that setTimeout() doesn't hinders the flow of the execution and when time expires the call back functions triggers .

//I've taken this simple example just to demonstrate how aysn js code works using call back function, simillary in real world we gonna make mutilple http requests which gonna take some time to complete while our code is live.
 */

 /*
 what are hhtp requests?
 
 > Well sometimes we want to show stuff on our website which is stored in some kind of database or on another server somewhere such as blog posts or comments or maybe a list of songs or even use data for a profile page.

 > so in order to fetch data from the database or server we need to make http request.

 > So, when we make request to server it basically means requesting to the server's API endpoint/ the url which server has exposed to the internet where users can exchange data with that particular server.

 >So from our Code which runs in the browser we would make a request to a server endpoint.Now that server would look at this request and say OK you want this data so I'll send it back to you as a response and then we'd get that data in our code and we can do something with it like render it to the browser if we want it.

 >Now there's many different APIs that we can use to get data. Twitter, YouTube, Instagram, Spotify and loads more and each API is going to have its own set of endpoints that we make requests for data.

> But anyway once we make a request to an endpoint from the browser we typically get back a selection
of data in a format called Jason and Jason is a format which looks very much like JavaScript objects
and then we can do something with that data.
 */