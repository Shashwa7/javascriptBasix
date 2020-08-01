const button = document.querySelector('button');

//btn.addEventlistener('type of event listen', call back function);

button.addEventListener('click', () => {

    console.log('you clicked me!');
});

const items = document.querySelectorAll('li');

//adding event listener to each item
items.forEach(item => {
    //   event object tells what event is invoked whicle clicking
    item.addEventListener('click', event => {
        //console.log('item Clicked!');
        //console.log(event);

        // console.log(event.target);  //tells which li tag was clicked

        //deleting/striking out the item when clicked
        // item.classList.toggle('strikeItem');
                     //or
        event.target.classList.toggle('strikeItem');
    });
});