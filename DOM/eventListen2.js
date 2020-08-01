const ul = document.querySelector('ul');

//remove() is an inbuilt method that removes the element from our web page.
//ul.remove(); // ul is being removed from our html page

const items = document.querySelectorAll('li');


items.forEach(item => {

    item.addEventListener('click', e => {
        // item.remove();
        //or
        e.target.remove();
    });

});


// adding item to the list

const button = document.querySelector('button');
button.addEventListener('click', e => {

    const item = document.querySelector('.input').value;
    // ul.innerHTML += `<li> ${item} </li>`;     //using this method if we add any item , no item from the list can't be removed
    //or
    // if we add item by append()/prepend() newly added items can't be removed but old one's can.

    const li = document.createElement('li');
    li.textContent = item;
    //append it to the ul 
    //ul.append(li); // add to the last

    //     //prepend in ul
    ul.prepend(li);

});



