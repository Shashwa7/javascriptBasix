// when we are listening for submit event we don't aatach eventlistener to submit button but instead to the parent form. As we are submmiting form not the submit button.

const form = document.querySelector('.signup-form');
// const username = document.querySelector('#userName');
// const useremail = document.querySelector('#userEmail');

// instead of using click event we'er using submit event as it is more specific and user can submit form in 2 ways either by clicking at the submit button or just by hitting the 'enter' key.

form.addEventListener('submit', e =>{
    //We want to handle the submit event in our own way not the default way of a browser.
    // to prevent the default submission of form, we use prventDefault() method.
    e.preventDefault();  //the browser does not refresh after submission- inputs are not reset after submission.

    // console.log(username.value);
    // console.log(useremail.value);

    // we can directly access input using '.'
    console.log(form.userName.value);  //userName is the id assigned to the input field.
   
}
);