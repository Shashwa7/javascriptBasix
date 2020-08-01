//better approach than app.js

const display = document.querySelector("#res")
const btns = document.querySelector("#btns")

display.innerText = ""
var opr = ""

btns.addEventListener('click', event => {
     btn = event.target;
    
    if(btn.id != "btnClr" && btn.id != "btnEql"){

        //display the text on calc screen
        display.innerText += btn.innerText

        if(btn.id != "btn0" && btn.id != "btn1")
        {
            opr = btn.innerText
        }
    }
    else if(btn.id === "btnEql"){
        
        let operands = display.innerText.split(opr) //splits into array
        //parsing the binary string to decimal type
        let operandX = parseInt(operands[0],2) 
        let operandY = parseInt(operands[1],2)

        let exp = operandX + opr + operandY //string exp
        //? eval() takes math string expression and spits out the result of Number type
        let result = eval(exp).toString(2) //typecast decimal to binary string

        display.innerText = ~~result
        //* The double bitwise NOT ('~~'): is a shortcut for Math.floor() 
       
    }else{
        //clear operation
        opr = ""
        display.innerText = ""   
    }
})