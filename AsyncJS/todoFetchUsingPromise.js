//pomise example
//It is literally a promise, it is either made or just doesn't.

//while creating a promise type function we must return a Promise() func, that takes 2 parameters: resolve and reject, these are keywords not userdefined words.

//in case of success we call resolve() fucntion
//in case of failiure we call reject() fucnction

//promise is basically saying look I am going to do something at some point, I'm either going to resolve or reject.

//.then() take 2 function arguments one for the resolve method and the other for the reject method 

const getSomething = () => {

    return new Promise((resolve, reject) => {
        //fetch something
        resolve('some data');
        //reject('some error');
    });
}

/*
//1st way
getSomething().then(

    //for resolve
    data => {
        console.log(data); //some data
    },

    //for reject 

    error => {
        console.log(error); //some error
    }
); //returns promise
*/

//2nd way
getSomething().then(data =>
//for resolve
{
    console.log(data);
}
).catch(error =>
//for reject
{
    console.log(error)
}
);

//here instead of passing 2 functions in then(), rather just passing the function for thr resolve method and seperatly catching the reject method.


// creating/implementing promise for getTodo
// not using callback function instead usinng resolve and reject 
const getTodos = (url) => {

    return new Promise((resolve, reject) => {

        const rqst = new XMLHttpRequest();
        rqst.open('GET', url);
        rqst.send();


        rqst.addEventListener('readystatechange', () => {

            if (rqst.readyState === 4 && rqst.status === 200) {
                const data = JSON.parse(rqst.responseText);
                resolve(data); //instead o call back
            }
            else if (rqst.readyState === 4)
                reject(`Couldn't fetch data!`);
        });

    })
};

/*

getTodos('todosFiles/justin.json').then(data => {
    console.log('Promise resolved: ', data);
}).catch(error => {
    console.log('Promise Rejected: ', error);
});


*/


//chaining Promises altenative for nesting callbacks

getTodos('todosFiles/justin.json').then(data => {
    
    console.log("Promise 1 resolved: ", data);

    return getTodos('todosFiles/hugo.json');
    //this reutrns the hugo jason file once justin's jason is fetched successfully;
    //now this whole thing returns the promise2/hugo file that we get back after the excution of its parent getTodos();
    //directly we can use '.then()' for hugo
}).then(data => {
    console.log("Promise 2 resolved: ", data);
}).catch(error => console.log("Promise rejected:",error));

//note: we don't have to wirte seperatly a new catch() for every new request, just one is enough that will catch any error/rejection.
//but it is must to write new '.then()' for every new request.