//select by ids
const title = document.getElementById('page-title');
console.log(title);

//select by  class name
const errors = document.getElementsByClassName('error');
//selects all elemnts defined with the mentioned class name and store them as html collection similar to arrays and list

console.log(errors);
console.log(errors[0]);
// cannot use foreach to iterate 

//select by tag name
const paras = document.getElementsByTagName('p');
//grabs all p tag from our html file and store them as html collection

console.log(paras);
console.log(paras[1]);