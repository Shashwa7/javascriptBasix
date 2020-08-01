// creating vars usind documnet object

const para = document.querySelector('p'); //grabs the first p tag it comes accross
const error = document.querySelector('.error'); // select p tag with the class name error
const error2 = document.querySelector('div.error');

//copying selector from the inspect page by selecting the element that we want to work on.
//Lf-Click element > Copy > Copy Selector

const head1 = document.querySelector('body > h1');

//selectin all elements of similar type and store them in a single node in an list fashion
const paras = document.querySelectorAll('p');


console.log(para, error, error2, head1);

//node list
console.log(paras);

//selecting specific element
console.log(paras[0]); //grabs the very first p tag

//iterating through the node
paras.forEach(para => {
    console.log(para);
}
);