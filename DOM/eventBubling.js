/* 
What is event Bubbling?
The event starts at the event target then it bubbles up to parents to see if there's any event listeners attached to them and if there is, then it's going to fire the callback function for those event listeners as well.
*/
const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        console.log("li event");
        e.stopPropagation(); // stops event bubbling from this point
    });
});

ul.addEventListener('click', e => {
    console.log('ul event');
});

//her when any li item is clicked then the broswer will also check if its parent ul has any eventlistener attached to it, if yes then it will be invoked too. (event bubbling in action, where event bubbles up after every li is clicked)

// we can stop this event bubbling and prevent it from bubling up to check if its containing parent node has any event to trigger. 
//we can use stopPropagation 