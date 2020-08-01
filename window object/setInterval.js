
/*setInterval-So where setTimeout() only fires
the function once, setInterval() carries on firing the function every amount of time that we specify.

 we will use setInterval to gradually output the final result after specific time period.

*/

// setting interval

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
   const greet = console.log('Every sec hello will be logged to theconsole!')
    setInterval(() => {

        console.log(greet);
    }, 1000) //1000 = 1sec

    //this will be print hello after every 1 sec on the window's console

});

// how to stop an interval
//contextmenus is 'right click' event
btn.addEventListener('contextmenu', () => {
let i = 0;
 
const timer = setInterval(() => {
  console.log('hello');
  i++;

  if(i === 5){
      clearInterval(timer);
  }
},1000);



//ternminate the interval : 2ways

//1>  after 5 sec the interval will stop.

});


//or
//2> set time out
setTimeout(() => {
    console.log('Interval timed out!');
    clearInterval(greet);
}, 5000)
