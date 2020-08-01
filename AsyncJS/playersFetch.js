const rqst =new XMLHttpRequest();//creating rqst obj

//setting up the request
rqst.open('GET','playersDB.json');

//establishing connetion
rqst.send();

//cheking for result
rqst.addEventListener('readystatechange', () => {

    if(rqst.readyState === 4 && rqst.status === 200){
        //typecasting jsonstring into JS objects
        console.log('Successfully Received data!');
        const playerData = JSON.parse(rqst.responseText);
        console.log(playerData)
    }
    else if(rqst.readyState === 4)
    console.log('Request failed!');
});