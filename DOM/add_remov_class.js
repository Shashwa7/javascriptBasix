const para = document.querySelector('p');

//grabs all associated classes
// in this case the p tag has only one class 'error'
console.log(para.classList);
para.classList.remove('error');  //removing class error\

para.innerText = 'Success p tag block!';
para.classList.add('success');


/*toggle class

> if the element has the specified class using toogle here method will remove the class

> but if element does't have the specified class using toggle method here will add the class
*/

const para2 = document.querySelector('div.error');

para2.classList.toggle('test'); // overrides the 'error' class and replace it with 'test' class

para2.classList.toggle('test'); // removes the test class and revert back to 'error' class.

para3 = document.querySelector('body > div:nth-child(2) > p:nth-child(3)');

para3.classList.toggle('test');
