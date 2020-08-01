//live feedback as user enters the input fields

const form = document.querySelector('.signup-form');

//adding event listener to username field in our form
form.userName.addEventListener('keyup', e => {

    //2 different ways of getting the values from the input field.
    //e.target.value = form.userName.value;
    //console.log(e.target.value, form.userName.value);

    if (check(e.target.value))
        form.userName.setAttribute('class', 'valid');
    else
        form.userName.setAttribute('class', 'invalid');

});


const check = name => {

    const patrn = /^[a-zA-Z]{6,}$/;

    if (patrn.test(name))
        return true;
    else
        return false;
};