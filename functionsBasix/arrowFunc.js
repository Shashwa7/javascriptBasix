//arrow function

//zero parameters
//'()' is neccessary
const hello = () => {
    console.log('hello!')
};
hello();

//one parameter, '()' necessary 
const add5 = x => {
    return x + 5;
}

console.log(add5(12));

// multiple parameters
const calcArea = (l, b) => {
    return l * b;
};

console.log(calcArea(5, 4));

//without statement block
//auto returns the res no ned to mention retuen keyword
const expo = (x, y) => x ** y;

console.log(expo(5, 2));


//Converting regular function into arrow function
// 10rs - parleG, 23Rs - Amul milk,  52Rs - Madhur Sugar

let cart = [10,23,52];

//regular function
const calcTax = function(items, tax){
    let total = 0;

    for(let i = 0; i < items.length; i++){
        total += items[i] + (items[i]*tax);
    }
    return total;
}
console.log('Total: Rs',calcTax(cart,0.01)); // 1 % tax on each product


//arrow function

const calcTax2 = (items, tax) => {
    let total = 0;

    for(let i = 0; i < items.length; i++){
        total += items[i] + (items[i]*tax);
    }
    return total;
}
console.log('Total: Rs',calcTax2(cart,0.01));