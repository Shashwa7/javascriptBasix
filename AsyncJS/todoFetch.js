const getTodos = (url, callbackFunc) => {

    const rqst = new XMLHttpRequest();
    rqst.open('GET', url);
    rqst.send();

    rqst.addEventListener('readystatechange', () => {

        if (rqst.readyState === 4 && rqst.status === 200) {
            const data = JSON.parse(rqst.responseText);
            callbackFunc(undefined, data);
        }
        else if (rqst.readyState === 4)
            callbackFunc(`Couldn't fetch data!`, undefined);
    });
};

//now we wanna fetch jason filies from todoas folder one by one in the same order they are stored.

//first we're fetching hugo's jason
getTodos('todosFiles/hugo.json', (err, data) => {

    if (err) //if any error occured
        console.log(err);
    else
        console.log(data);

    //now fetchig justin's jason by nesting it withing hugo's func;

    getTodos('todosFiles/justin.json', (err, data) => {
        if (err) //if any error occured
            console.log(err);
        else
            console.log(data);
    });
});

//So, in our case there were not many jason files to fetch so nesting doesn't looks complicated here but what if we have 1000's of json files to fetch then surely it will be quite messy and confusing. This is populary termed as 'callback hell' where we're nesting functions within functions creating a code unreadble, difficult to maintain and very complicated to debug if any error occurs.

// so what can we do to perform this same functionality of fetching data one by one but more cleaner and nicer looking code, ans is 'promises'.