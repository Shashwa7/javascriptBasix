//similar to object spread operator here we can manipulate array just by positioning the elements and commas as per our need.

let [a,,b] = [1,2,4,12];
//a = 1 b = 4  ~ ','/comma skips the digit '2' at index '1'
console.log(a,b);

// swapping a and b;
[a,b] = [b,a];

//a = 4, b = 1;

//slicing array into sub-parts; ...restHalf is varible length array.(hypothetical array);

let [a,b,c,...restHalf] = [1,2,3,4,5,6,7,8,9,10];
console.log('First Half:',a,b,c); // 1 2 3
console.log('Remaining Half:',...restHalf); // 4 5 6 7 8 9 10 