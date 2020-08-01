//in our earlier example we have declared the cache object in global scope which is not a secure practice to do so, because it is exposed and prone to manipulation.

//here we can take help if closures and we know that using clousre func the data variables are secured

const memoAdd5 = () => {
    let cache = {};  //declaring inside

    //using closure
    return function (n) {
        if (n in cache)
            return cache[n];
        else {
            console.log('Computing...')
            cache[n] = n + 5;
            return cache[n];
        }
    }
}

const closureMemoAdd5 = memoAdd5(); //return the func 
console.log(closureMemoAdd5(5));
console.log(closureMemoAdd5(5));
console.log(closureMemoAdd5(5));