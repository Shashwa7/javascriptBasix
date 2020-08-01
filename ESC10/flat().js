//.flat() is a method we can use on array;
const arr = [1, 2, 3, 4, 5];
arr.flat();

//o-p: (5) [1, 2, 3, 4, 5]
// we don't see any differce the output was same as the arr.

// what is the use of flat()?
const nestArr = [1, [2, 3], 4, [5, 6]];
nestArr.flat();
//o-p: [1, 2, 3, 4, 5, 6]; here we can observe that it unpacks the nested arrays([2,3] & [5,6]) and display them as normal array.

//by default .flat() unpack nested loops with level1(.flat(1))packing like we've have seen in nestArr;
//we can even define how much layers the flat(layer) method should unwrap.

const nestComplexArr = [1, 2, [3, [4, 5]], 6];
//her we have level 2 packing [nest,[nest]] => [3, [4,5]];
//if we just use .flat() it will not unwrap [4,5] as they are level2 wrapping.

nestComplexArr.flat(); //(5) [1, 2, 3, Array(2), 6]

//we have to define the level of wrapping the flat method can unwrap, as we have 2 level nest wrap here we must write something like this

nestComplexArr.flat(2); // (6) [1, 2, 3, 4, 5, 6] - completly flatten array


//flat() methods also helps up in cleaning blank/empty entries

const entries = ['bob', 'maya',,,,,,,'hugo'];
entries.flat(); //(3) ["bob", "maya", "hugo"]

