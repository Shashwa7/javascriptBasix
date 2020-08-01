const arr = [1, 2, 12, 5];

// updating array  using forEach 
//for each
const tmp = []; //indirect update
arr.forEach(num => tmp.push(num * 2));
console.log('Original: ', arr);
console.log('Updated: ', tmp);


//note: it is must to return some value while using array methods like: map, filter, reduce;

//using array using map method 
const tmp2 = arr.map(num => num * 2);
console.log('Original: ', arr);
console.log('Update: ', tmp2);
