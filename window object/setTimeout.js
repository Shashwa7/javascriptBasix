//window.setTimeout()/setTimeout(): it takes a call back function and fires it only once after certain amount of time; 

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    console.log('wait for 3 sec to get the alert!')
    setTimeout(() => 
    {
        alert('mssg alert after 3 sec!');
    }, 3000); //3000 = 3 sec;
});
