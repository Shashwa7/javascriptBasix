//pure function basically means a function that doesn't affects any data outside its scope.It has no side effects

//ex of normal func
let fruits = ['apple', 'cherry','mango', 'guava', 'grapes'];
console.log('Orginal fruits array: ',fruits);

const mainpulateFruit = arr => arr.pop();
mainpulateFruit(fruits);
console.log('Normal func o/p: ',fruits);
console.log('Orginal array after normal func: ',fruits);

//ex of pure func 
const mainpulateFruitUsingPureFunc = arr => {
    let newArr = [].concat(arr);
    newArr.pop();
    return newArr;
}
console.log('Pure func o/p:',mainpulateFruitUsingPureFunc(fruits));
console.log('Orginal array after pure func: ',fruits);

//note:: even console.log()/DOM/input/output is not a pure func as does changes the windows console after every execution
//note:: it is not possible to make evrything pure because we can't have everything without side effects