//? A MUCH BETTER APPROACH THAN app.js file

//Global DOM & Func
const selectBtn = id => document.querySelector(id)
const btns = selectBtn("#btns")


//creating btns-recurssive
const createBtns = total => {
    if (total === 0)
        return 1
    else {
        createBtns(total - 1)
        let btn = `<button id='btn${total}'>${total}</button>`
        btns.innerHTML += btn
    }

}
createBtns(9) //total- 9btns

//Golobal DOM & Array
const btn5 = selectBtn("#btn5")
var nums = [1, 2, 3, 6, 9, 8, 7, 4] //!sequence matters ~intial sequence
const targetIDs = [1, 2, 3, 6, 9, 8, 7, 4] //!sequence matters 
var poppedElement

btn5.addEventListener('click', event => {

    //*right shifting array one element at a time
    //! last element from the list will be lost after every for loop iteration
    for (let i = 7; i > 0; i--) {
        if (i === 7)
         poppedElement = nums[i] //* storing the element which will be lost

        nums[i] = nums[i - 1]
    }
    //? after very first loop iteration
    //* updated: nums = [1,1,2,3,6,9,8,7] ; lost el = 4
    //* poppedElement = 4

    //*appending the lost element to the front index of the array
    nums[0] = poppedElement
   
    //? iterating through specific btn ids that is o be manipulated
    for(let i = 0; i < targetIDs.length; i++)
        selectBtn(`#btn${targetIDs[i]}`).innerText = nums[i]

})