//function with default parameter
function hello(name = 'defaultName') {
    console.log(`hello ${name} !`);
}
hello();
hello('groot');

//return function

const calcArea = function (l, b) {
    let area = l * b;
    return area;
};

let rec1Area = calcArea(2, 3);
console.log(rec1Area);
