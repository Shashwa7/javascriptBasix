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
var nums = [1, 2, 3, 6, 9, 8, 7, 4] //!sequence matters

btn5.addEventListener('click', event => {

    nums.unshift(nums.pop())
    //? pop(): pops/removes the last element from the list, 
    //? unshift(): grabs the popped element and append it to the list from front
    //* no list element is lost

    selectBtn("#btn1").innerText = nums[0]
    selectBtn("#btn2").innerText = nums[1]
    selectBtn("#btn3").innerText = nums[2]
    selectBtn("#btn6").innerText = nums[3]
    selectBtn("#btn9").innerText = nums[4]
    selectBtn("#btn8").innerText = nums[5]
    selectBtn("#btn7").innerText = nums[6]
    selectBtn("#btn4").innerText = nums[7]

})