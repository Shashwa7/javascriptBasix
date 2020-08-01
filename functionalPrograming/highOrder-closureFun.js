//HOF: a func that either takes one or more fuc as arguments or returns a fuc as a result often called as callback

//type1
const hof = () => () => console.log(5);
hof()();

//type 2 
const hof2 = func => func();

hof2(() => console.log('hello users!'));

//Closure: basically means func within func, where the child func has access to all the variables defined in its outerscope but within the scope of its parent func.

//closure func if used properly means without mutating actual data in its pure form, can help in implementing data/variable privacy/integrity.creating varibles and keeping them private just like we create private variable in classes .


//impure closure func exp ---------------------------------
const closure = () => {
    let count = 0; //child fun can access this variable
    return function increment() {
        count++; 
        console.log(count);
    }
}

const incrFnc = closure(); //intial func
incrFnc();incrFnc();incrFnc();

//now we can use 'increFnc' which is same a 'increment' fnc defined and returned by closure func.

//so evertime we call 'incrFnc' also invoke 'increment' func
//--------------------------------------------------------

//pure closure func exp------------------------------------

const pureClosure = () => {
    
    let id = '213A30FD'; //chid func has access to this

    return function getID(){
        return id;    
    }
}

const emp1 = pureClosure(); //emp1 can invoke getID() to retrive its ID without mainpulating it
const emp1ID = emp1(); //invoking emp1() === invoking getID();
console.log('Emp ID:',emp1ID);



