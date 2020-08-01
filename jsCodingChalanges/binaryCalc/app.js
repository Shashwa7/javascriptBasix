const selectElement = element => document.querySelector(element)

const btns = selectElement("#btns")
const display = selectElement("#res")

const extractVals = exp => {

    let x
    let y
    let opr
    let index
    x = y = opr = index = ""

    const checkSpecial = /\W/;
    if (checkSpecial.test(exp)) {
        capture = checkSpecial.exec(exp)
        opr = capture[0]
        index = capture['index']
        x = exp.slice(0, index)
        y = exp.slice(index + 1, exp.length)
    }

    return { x, y, opr }
}
const operations = btnId => {

    switch (btnId) {
        case 'btn0': display.innerText += 0; break;
        case 'btn1': display.innerText += 1; break;
        case 'btnClr': display.innerText = ""; break;
        case 'btnEql': {
            const vals = extractVals(display.innerText)
            let a = parseInt(vals.x, 2)
            let b = parseInt(vals.y, 2)
            let opr = vals.opr

            let res = calculate(a, b, opr)
            display.innerText = res
        }; break;
        case 'btnSum': display.innerText += "+"; break;
        case 'btnSub': display.innerText += "-"; break;
        case 'btnMul': display.innerText += "*"; break;
        case 'btnDiv': display.innerText += "/"; break;
    }
    console.log(display)
}

function calculate (a, b, opr) {

    let res =  0
    switch(opr){
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/': res = a / b; break;
        default: res = "Invalid Expression!";break;
    }
   
    let binaryRes = res.toString(2)
    return  binaryRes
}

btns.addEventListener('click', event => {

    trgBtn = event.target;
    //btnId = trgBtn.getAttribute('id')
    //or
    btnId = trgBtn.id
    operations(btnId)

})