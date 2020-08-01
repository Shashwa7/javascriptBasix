let x = +true
let y = !"mario"
let z = +false
let p = -true //'-' doesn't inverse the value, just concatinating '-' + '1' = -1
let notX = +(!true) // 0

console.log(x , y, z, p, notX)
/*
?  Explanation::
*  The unary plus(+) tries to convert an operand to a number. true is 1, and false is 0.
*  The string 'Mario' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This     returns false

! note: anything other than 0 is cosidered to be truthy value.
*/
