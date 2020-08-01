/*
exp: ^[a-zA-Z0-9]{6,15}$
>checks:
    a word
>can contain:
    lowercase
    uppercase
    numerical values
    min_char: 6
    max_char: 15

        or

simple we can use'.' instead

exp: ^.{6,15}$
>checks:
    a word
>can contains:
    everything(alphabets, numbers, special chars)
    min-char: 6;
    max-char: 15;

*/


const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {

    e.preventDefault(); //prevents default browser submission, allows user customised submission
    check(form.userName.value); //checking username using regEx function check();

})

const check = (name) => {

    //checks if user name is min of 6 char and cannot contain any special chars
    pattern = /^[a-zA-Z0-9]{6,}$/;

    //test this pattern
    if (pattern.test(name))  //returns a bool value{}  
    {
        feedback.textContent = 'Valid Username!';
        // will override any default class. 
        // better not use add(), it will append the class.
        feedback.classList.setAttribute('class', 'valid');
    }

    else {
        feedback.textContent = 'Invalid Username ~ must be atleast 6 char long and no special char!';
        feedback.classList.setAttribute('class', 'invalid');
    }

}


// we can also use 'search' method instead of 'test', but it returns an intger -(stating index(0) of the match if found) other wise -1;

let name = 'shashwat';
let name2 = 'shashwat213';
const pattern2 = /^[a-z]{6,}$/; //only lowercase and min 6 char

let result = name.search(pattern2);
console.log('Valid String: ', result);
result = name2.search(pattern2);
console.log('Invalid String: ', result);