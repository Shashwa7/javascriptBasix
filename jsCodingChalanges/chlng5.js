//https://www.hackerrank.com/challenges/js10-arrays/problem

//? finding second larget num in the array
function getSeconglargestNum(arr){

    if(arr.length <= 1)
        return arr[0]
    else{
        let max1 = arr[0]
        let max2 = arr[0]
        arr.forEach(num => {
            if(num > max1){
                max2 = max1 
                max1 = num
            }
            else if(num > max2 && num < max1){
                max2 = num
            }
        })

        return max2
    }
}

let x = [2,3,16,6,5]
let y = [5,5,5,5,5]
console.log(getSeconglargestNum(x))
console.log(getSeconglargestNum(y))