let flag = true;

if (flag) {
    let name1 = 'Shashwat';
    var name2 = 'Srishti';
    const mom = 'Sadhana';
    console.log(name1, name2, mom);
}

//console.log(name1); not accesible outside the block - visible locally
//console.log(mom); // has local scope
console.log(name2); // accessible throught the program - global scope