//math object
console.log(Math); //shows all methods that can be implemented using the Math object

//some examples
console.log('PI value: ', Math.PI);
console.log('Round: ', Math.round(7.5)); // round(7.5) = 8;
console.log('floor: ', Math.floor(7.9)); // floor(7.9) = floor(7.3) = 7;
console.log('Trunc: ', Math.trunc(7.8212)); // will print out only the integer part not the floating points
const num = Math.random();
console.log('Random: ', num);
console.log('Random(0-100):', Math.round(num * 100));
console.log('Absolute:', Math.abs(-7)); //abs(-7) = abs(7) = 7
