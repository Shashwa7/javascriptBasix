//DOM fetch
const form = document.querySelector('form');

form.addEventListener('submit', () => {

    //name is the input field's ID
    const inputName = form.name.value;
    //add name to localStorage
    localStorage.setItem('name', inputName);
});

//retrive name from local storage
if (localStorage.getItem('name')) {
    userName = localStorage.getItem('name');
    form.innerHTML += `<p>Hi ${userName}!</p>`;
}
    //it will append this html template only when the local storage has a key 'name' with some value in it.