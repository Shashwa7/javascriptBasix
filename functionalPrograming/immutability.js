 //immutabilty: not changing state, but making copies of the state and returning a new state every time
// structural sharing??: where only chages are updated not the complete file altogether

//analogy: consider it as, you have issued a book from library and you don't wanna destroy it cuz you have to return it so that other people can use it.

const obj = {name: 'shashwat'};

function clone(obj) {
    return {...obj}; //thi is pure

    //{...obj} this basically return a copy of original obj not the original obj
}

function updateName(obj){
    const tmpObj = clone(obj); //storing copy into another obj constant
    tmpObj.name = 'kalob';
    return tmpObj;
}

const updatedObj = updateName(obj);
console.log(obj, updatedObj);