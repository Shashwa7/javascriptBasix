// get a reference to the element 'ul'

const ul = document.querySelector('.myFriends');

const myFriends = ['Chris', 'Shubham', 'Puneet', 'Lavanya'];

let list = ``; // creating list that further will be appended to ul

myFriends.forEach(friend => {
    list += `<li style="color:green; font-size = 20px">Hello my friend ${friend}</li>`;
});

//after this loop the list variable will contain all the mentioned friends
//now placing the list within the ul tags in the html document 
ul.innerHTML = list;

