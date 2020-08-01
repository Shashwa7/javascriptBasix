//changing text--------------------------------------------
const para = document.querySelector('p'); //grabs the 1st para

console.log(para.innerText);
//inner text is a property not method as we don't use () in the end of the property name.

//changin the actual content
para.innerText = 'Hello Shashwat!';
//now the content of the paragrah is updated

//just adding extra content to the existing one
para.innerText += ', you are a great person!';

// now selecting every para and appending some extra content

const paras = document.querySelectorAll('p');

paras.forEach(para => {

    para.innerText += ', appending extra text here!';
}
);

//change HTML elements---------------------------------------------------
const content = document.querySelector('.content');
//console.log(content.innerHTML);
content.innerHTML = '<h3>this has replaced the p tag!</h3>';  //overwrite the original content
content.innerHTML += '<h4>this has been appended to the recently added h3 tag </h4>';  //appends to the original content


//create htmp template-------------------------------------
//apending items to our content div
const friends = ['Shubh', 'Chris', 'Punit'];

friends.forEach(friend => {

    content.innerHTML += `<p>Hello ${friend} </p>`;
});
