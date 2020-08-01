/*ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

//instead of doing this 
const half = (object) => object.max + object.min / 2;

//we can directly pass the properties, code look much cleaner
const half = ({ max, min }) => (max + min) / 2;

console.log(half(stats));