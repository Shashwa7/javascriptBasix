const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); //op:20
console.log(shape.perimeter()); //op:NAN

/*
  *Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.

  ?With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).

  !There is no value radius on that object, which returns undefined.
 
*/

//other examples

const opr = {

    a: 2, b: 4,
    //regular func
    add() {
        return opr.a + opr.b  //or instead this.a + this.b
    },
    //arrow funcs
    //!  sub: () => this.b - this.a  --this won't work
    sub: () => opr.b - opr.a
}

console.log(opr.add())
console.log(opr.sub())