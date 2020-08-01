//for of  and for in loops

const basket = ['rose', 'lily', 'levender', 'jasmine'];

//we can iterate through this array using serveral loop  methods

//1 traditional for loop
for (let i = 0; i < basket.length; i++)
    console.log(basket[i]);

//2 for each
basket.forEach(flower => console.log(flower));

//3 new:(iterating) for of
//wkt we can iterate over arrays and strings
for (flower of basket)
    console.log(flower);
/*
 o-p::
rose
lily
levender
jasmine
 */
for (letter of 'levender')
    console.log(letter);
/*
o-p::
l
e
v
e
n
d
e
r
 */


//4 new:(enumerating) for in- works with object instead of arrays;
// and return just obj properties not values
//obj
//we interate through arrays and strings but we enumerate through object(enumerating), we also call properties as enumerables.
const bouque = {
    redRose: 5,
    whiteRose: 3,
    levender: 3,
    whiteLily: 3,
    extaGreens: 10
}

for (flower in bouque)
    console.log(flower);

/*
redRose
whiteRose
levender
whiteLily
extaGreens
*/

/*
note::

we can't iterate through objects using 'for of' or any iterable conditionals

but we CAN! enumerate through arrays using 'for in' because wkt end of the day everything in JS is nothing but objects.
*/

//enumerating through array.
for (flowerIndex in basket)
    console.log(flowerIndex);

/*
o-p::
0
1
2
3
 */
/*
think it of as:

basket = {
    0: 'rose',
    1: 'lily',
    2: 'levender',
    3: 'jasmine'
}
*/