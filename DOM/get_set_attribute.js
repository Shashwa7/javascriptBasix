const link = document.querySelector('a');

console.log(link.getAttribute('href'));

//setting attribute from google.com to yt.com
link.setAttribute('href', 'https://www.youtube.com');
link.innerText = 'Click to go on youtube!';

console.log(link.getAttribute('href'));

//similarly we can chage class name, id name, other attrobutes

//note: if we try to set an attribute that doesn't exist then it will created automatically
// if we try to get a non-exitung attribute then 'null' is by default.

//console.log(link.getAttribute('style')); > null
link.setAttribute('style', 'color:orange');