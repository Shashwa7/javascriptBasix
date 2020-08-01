//mehtod A
const heading = document.querySelector('h1');
heading.setAttribute('style', 'padding: 30px');
//but doing this it will override every predefined style given to that element. 

//better aproach to add extra style to the current existing style
console.log(heading.style);
heading.style.color = 'yellow';

// generally the styles which are syntaxed as for exmp: 'font-size' are camel cased here:'fontSize'
heading.style.fontFamily = 'monospace';
heading.style.textAlign = 'center';
heading.style.fontSize = '35px';