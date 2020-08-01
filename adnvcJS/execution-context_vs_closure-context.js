//? use JS visulaizer to understand in-depth process:  https://ui.dev/javascript-visualizer/

//?execution-context: by defalut the global execution context takes care of everything until any function is invoked.
//* So whenever a function is invoked, a new execution context for the function is created which keeps track of all the locally declared variables & functions and its reference is pushed to the execution stack.  

//* once the called function is executed sucessfully, its reference is popped from the execution stack

//?Closure-context: when a function(parent) returns another function(child), the nested function(child) has  access to every varibles/arguments from its parent function, even after the parent function is popped from the execution stack.


//? Executions-context example

function x() {
    console.log("x: ", this)
    var a = 12

    function y() {
        var b = 9
        console.log("y: ", this)
        console.log("b: ", b)
        console.log('a: ', a)
    }
    y()
}

x()

/*
?Execution context wrt global
!CREATION PHASE

*window: global object
*this: window
*x: fn()

? x() -> invoked (window obj)
? EXECUTION STACK: push(x) > x()
!EXECUTION PHASE
[
    ?Execution context wrt x()
    !CREATION PHASE
    * arguments: { length: 0 }
    * this: window
    * a: undefined
    * y: fn()

    !EXECUTION PHASE
    * arguments: { length: 0 }
    * this: window
    * a: 12
    * y: fn()
    ? y() -> invoked (window obj)
    ? EXECUTION STACK: push(y) > x(), y()
        [
            ?Execution context wrt x()
            !CREATION PHASE
            * arguments: { length: 0 }
            * this: window
            * b: undefined


            !EXECUTION PHASE
            * arguments: { length: 0 }
            * this: window
            * b: 9
            ?here while excuting statement "console.log('a: ', a)" JS will look y()'s variable environment(VE), if there exist such variable 'a', then it will take the value but in this case there no such varible 'a' exists in y()'s (VE) so it will look for its parent function x()'s (VE) and here there is a varible with the identity 'a' so it will fetch the corresponding value and console.log(a).
            ?Here we can observe one pattern that if the mentioned varible is not found in the declared scope, JS propogates upwards until the variable is found and if the varible is not present, even in the global (VE) then it will throw a refernece error
        ]

]

? EXECUTION STACK: pop(y) > x()
? EXECUTION STACK: pop(x())

* EXECUTION Completed

*/


//? closure context

function addA(a) {

    console.log("Invoked by: ", this)
    console.log("a: ", a)

    return function (b) {
        console.log("Invoked by: ", this)
        console.log("b: ", b)
        return a + b
    }
}

var addB = addA(5); //this retuns the anonymous func(b)
//now addB = func(b) = addB(b)

var res = addB(7)
console.log(res)

/*
?Global Execution Context -State A before the execution of addA(a)
! Phase: Creation
* window: global object
* this: window
* addA: fn()
* addB: undefined
* res: undefined

! Phase: Execution
* window: global object
* this: window
* addA: fn()
* addB: undefined
* res: undefined

* invokes addA()
? EXECUTION STACK: push(addA) > addA()
    [
        ? addA Execution Context
        ! Phase: Creation
        * arguments: { 0: 5, length: 1 }
        * this: window
        * a: 5
        
        ! Phase: Execution
        * arguments: { 0: 5, length: 1 }
        * this: window
        * a: 5
        ?returns the anonymous func(b) and pops off the execution stack
        ? EXECUTION STACK: pop(addA) > _
    ]

?Global Execution Context -State B after the execution of addA(a)


! Phase: Execution
*window: global object
*this: window
*addA: fn()
*addB: fn()
*res: undefined
 ? EXECUTION STACK: push(closureScope(VE of addA)) > closureScope{}
[
    !CLOSURE SCOPE(wrt addA())
     {
    * arguments: { 0: 5, length: 1 }
    * this: window
    * a: 5
     }
    
    *INVOKES addB()
    ? EXECUTION STACK: push(addB) > closureScope{}, addB()
    !! anonymous(addB()) has access to Closure scope VE
    [
        ?anonymous(addB()) Execution Context 
        * Phase: Creation
        * arguments: { 0: 7, length: 1 }
        * this: window
        * b: 7
    ]
    ? EXECUTION STACK: pop(addB) > closureScope{}
]

? Final image of global execution context after execution of addB() which returns the final sum value of 'a + b' to the var 'res'

?Global Execution Context
* window: global object
* this: window
* addA: fn()
* addB: fn()
* res: 12

?EXECUTION STACK: pop(closureScope{}) > _

* Execution successful and returned res = 12

*/