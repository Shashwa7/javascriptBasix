const bird = {
    size: 'small',
};

const mouse = {
    name: 'Mickey',
    small: true,
};

console.log(mouse[bird['size']]) //return true
console.log(mouse[bird.size]) //return true
//? in the above cases bird.size/bird["size"] returns string value "small" which can be visualised as mouse["small"], which eventually returns bool value true

conosole.log(mouse.bird.size) //throws :Cannot read property 'size' of undefined
//!this is because bird is not nested within mouse obj so we can't use '.' to acces bird and its property