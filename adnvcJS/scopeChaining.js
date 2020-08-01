function greet(){

    return function mssg(){
        let greetMsg = "Hello Bryan!"

        return function printMssg(){
            return greetMsg
        }
    }
}

console.log("1: ",greet()) //return  mssg() func 
console.log("2: ",greet()()) //returns printMssg() func
console.log("3: ",greet()()()) //executes printMssg() func
