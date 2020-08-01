const button = document.querySelector('button');
const popUp = document.querySelector('.popup-wrapper');
const exit = document.querySelector('.popup-close');

button.addEventListener('click', () =>{
    popUp.style.display = 'block';
});

exit.addEventListener('click', () =>{
    popUp.style.display = 'none';
});

