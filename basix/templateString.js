let book = 'Harry Potter';
let author = 'JK Rowling';
let copies = '500 mil';
let res;

//traditional concatination
// res = 'Book ' + book + ' is written by ' + author + ' sold about ' + copies + ' plus copies!';
// console.log(res);

//string template a better approach
 res = `String Template:\n${book} is written by ${author} sold about ${copies} plus copies`;
 console.log(res);
// very helpful in presenting dynamic data

 //html template

 res = `
 <h1>Html Template </h1>
 <h2>Book - ${book} </h2>
 <h2>Author - ${author} </h2>
 <h2>Copies sold - ${copies} </h2>
 `
 console.log(res);