//sets are new data structure in object category
//these are reference type and  allow us to store any type of unique values
//it doesn't allow to store duplicate values unlike array does and hence prevents redundency

//array
const fruitSetA = ['apple', 'orange', 'cherry', 'guava', 'cherry'];
console.log("Array: ", fruitSetA);
//here we can notice we have cherry item added to our array twice, array will not delete duplicates

//set 
//passing array as parameter
const fruitSetB = new Set(fruitSetA); //return an object set
console.log("Set : ", fruitSetB);
//set will delete duplicates 

//casting this received set object into array we caan use spread operator 
const uniqueFruitSet = [...fruitSetB];
console.log("Set 2 Array: ", uniqueFruitSet);
//or we could have done all this in one line
const uniqueFruitSet2 = [...new Set(fruitSetA)];
console.log("Set 2 Array: ", uniqueFruitSet2);

//passing string as parameter
const justLetters = new Set('Shashwat'); //will chunk out each letter and stores it as individual set
//and ofcourse it will delete duplicate letters
console.log(justLetters);

//methods and properties for set 

const ages = new Set();

//add item
ages.add(18);
ages.add(78);

//chananble methods
ages.add(8).add(24);

console.log("Set: ", ages);

//delete item
ages.delete(8);
console.log(ages);
console.log('Set: ', ages);

//size of our set . note: we can't use length property here but we have size property as an alternative

console.log("Size of set: ", ages.size);


//has to check 
const hasItem = ages.has(24);

//clear set
ages.clear();

//iterating through set

//note: wkt set is a object type but we cam use for each to iterate through it
//for each
ages.forEach(age => console.log(age));
