const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');
const button = document.querySelector('button');

// previously while making our todo list program we were facing some problem and it was, when we add/append any  new item to the list the 'remove' method listener is not attached to these newly created items, so to resolve this we can use event deligation process

//instead of attaching event listener to each li, it is recommended to attach listener to 'ul'- the parent container. So, eventually any newly added item will automatically inherit the eventListener defined for its parent 'ul'.
ul.addEventListener('click', e => {
    // console.log(e.target);
    // grabs the li which was clicked 
    if (e.target.tagName === 'LI')  //check if the tagNamge is LI then removes its
        e.target.remove();
});


//add item
button.addEventListener('click', e => {

    const item = document.querySelector('.input').value;
    const li = document.createElement('li');
    li.textContent = item;
    ul.append(li);
});

