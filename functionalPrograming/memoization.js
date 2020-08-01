//memoization basically means saving/storing the solution of a specific probelm into cache so that when the same problem is invoked later in the program the result is fetched from the cache instead of calculating it again.

//think it as calculating a very big problem that take some time, so running it everytime is in-efficient but if we store its result in cache memory when calculated for very the first time, then later when we want to do the same calculation we don't repeat the whole process but instead just fetch it directly from the cache.

const add5 = n =>{
    console.log('Simple Function called:');
    return n+5;
} ;

console.log(add5(21));
console.log(add5(21));
//everytime 'add5' func is called even for the same input, the whole process of calculation is repeated.Very in-efficient

let cache = {}; //created an empty obj to store result

const memoAdd5 = n => {
    if(n in cache)
        return cache[n]; //returning result from the cache if found
    else{
        console.log(`Creating key:${n} and storing result as value. . .`);
        cache[n] = n + 5; //creating 'key' and storing value/result.
        return cache[n];
    }
}

console.log('1',memoAdd5(325)); //storing in cache
console.log('2',memoAdd5(325)); //now just retreive from cache as the input is same
console.log('3', memoAdd5(24));//new input new entry

console.log(cache);