//composing: shows real power of fucntional programing
//it basically means multiple funcs working on same data in some order and throws some finite results

//each func is termed as component, a program can have many such components and many possible combinations to organise these components to acheive desired result.

//like an assembly line in automobile company.Each station(componet) has some defined task to perform on the model(data),assembling parts altogther as the model progresses through stations and eventually results is finished car.

// data --> func1 --> data2 --> func2 --> data3 -->funcR --> result

//there is no such keyword like 'compose()' in JS, in order to use such special functional programing keywords,one can download 'ramdajs.com' library, using this we can easily implement functional programing in our code.

//but for now we are just creating our custome compose() func

const compose = (fn1, fn2) => (data) => fn1(fn2(data));

//here the compose func takes 2 funcs as arguments and returns a func that takes data as argument 
//further, the returned func computes data in an order where first: data is passed through 'fn2' and the retured data is passed through 'fn1' and throws out the final result

const multplyBy3 = num => num*3;
const absResult = num => Math.abs(num);

const computeData = compose(absResult, multplyBy3); //this basically returns a func that takes some data/num as input
/*
s1> computeData(num); num = data
s2> computeData(num){
    absResult(num){

        multplyBy3(num){
           x =  num * 3
        }
        return abs(x);
    }

}

*/

const data = 12;
const result = computeData(data);
console.log('Result:',result);

//here data/num = 12, this data is passed through 'multiplyBy3' func: first, then the resultant data is passed throught 'absResult' func to make sure the result is always positive. and finally the result is returned.

//here we can change the sequence of execution by changin the order of fucns


//note: composibilty is a system design principle that deals with realtionship b/w components

//pipe: similar to compose but different sequencing

const pipe = (fn1, fn2) => (data) => fn2(fn1(data));

function greet(name){
    return `hello ${name}!`;
}

function solong(name){
    return `farewell ${name}`;
}

const user  = pipe(greet, solong);
console.log(user('Shashwat'));

//or
console.log(pipe(greet, solong)("Mario"))