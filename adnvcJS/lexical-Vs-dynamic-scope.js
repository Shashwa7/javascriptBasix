//* lexical-scope: availabe-data and where the func was defined, not where the func is called(dynamic scope)

//?some examples
//*nothing is weird here- everything looks fine
const a = function(){
    console.log('a: ',this) //this: window obj

    const b = function(){
        console.log('b: ', this) //this: window obj

        const c = {
            name: "obj-C",
            greet(){
                console.log("c:",this) //this: c(obj)
            }
        }
        c.greet() //as invoked by c
    }
    b()
}

a()
/*
* as a() is invoked by window obj, its child functions will be invoked by the same window obj.
* we can also observe that obj c has a greet() property and is invoked by the obj itself not by the default window obj

*/

//! weird JS where the lexcial scoping switch to dynamic scoping

const xyz  = {
    name: 'xyz-Obj',
    greet(){
        console.log('a:',this) //* this = xyz obj(lexical)
        const greet2 = function(){
            console.log('b:',this) 
            //?this = window obj
            //! was expecting this = xyz obj(dynamic) as invoked by default window obj, even though  it  belongs to obj xyz
        }
        greet2()
    }
}
xyz.greet()

//* to lexically scope everything we can use arrow functions(ES6) instead of regular functions.
const pqr  = {
    name: 'pqr-Obj',
    greet(){
        console.log('a:',this) //* this = pqr obj(lexical)
        const greet2 = () => {
            console.log('b:',this) //*this = pqr obj(lexical)
        }
        greet2()
    }
}
pqr.greet()

