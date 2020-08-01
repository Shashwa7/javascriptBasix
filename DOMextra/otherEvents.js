// copy event listenr
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    alert('hey, My content is copyright;');
    //if any one try to copy your content , this alert message will be invoked
})


//mosuse poistion listener
const box= document.querySelector('.box');

box.addEventListener('mousemove', e => {
//    console.log(e); //will output mouse event objects as mouse moves across the box/div area.

  console.log(e.offsetX, e.offsetY);
  box.textContent = `xPos- ${e.offsetX}   yPos- ${e.offsetY}`;
});

//useful in certaian situation where we want to record the user's cursor postion

//scroll/wheel event
//deirect adding event listener to our page 
document.addEventListener('wheel', e => {
   // console.log(e);   //thows wheel event object
    console.log(`xPos-'${e.pageX} yPos-${e.pageY}`);

});