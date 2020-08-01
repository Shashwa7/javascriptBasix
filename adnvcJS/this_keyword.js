//? this: it points/refers to the obj to which the function/property belongs
//**  generally 'this' refers to the global obj which is the 'window' obj.


const person = {
    name: "Mario",
    sing(){
        return `${this.name} is singing Bohemian Rhapsody!`
        //here this ===  person and wkt sing() belong to the obj 'person'
        //this.name equivalent of writing person.name
    }
}
//**but here I can't write this.name because here 'this' keyword is referencing to the 'window' obj not the 'person' obj. So, we have to explicitly mention the name in-order to invoke its properties.
console.log('Name:',person.name)
console.log('Activity:', person.sing())

//!note: incase you are executing yopur js code in node then the global obj is 'global' not 'window' which is for V8(chrome) engine'

//* Another benifit of this keyword is reusing the same code for multiple objects
//!executes this code in the chrome's console
const name = "Shashwat"

function VIPerson(){
    return this.name
    //point to the global obj 'name'
}

//* using same code for multiple objs
const StudentOfTheYear = {
    name: "Mario",
    score:"245/250",
    VIPerson
}

const ScholarOfTheYear = {
    name: "Hugo",
    scholarship: 100,
    VIPerson
}
console.log(StudentOfTheYear.VIPerson()) //Mario
console.log(ScholarOfTheYear.VIPerson()) //Hugo


