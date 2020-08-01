/*
>In order to help us create more flexible functions, ES6 introduces the 'rest parameter' for function parameters. 

>With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
*/
const sum = (...args) => {

    //if no args is passed by default an array will initialised with '0' as 1st index value
    if(args.length === 0)
      args[0] = 0;

    return args.reduce((total, num ) => total += num);
  }
  
  console.log(sum(1,2,3));
  console.log(sum());


  /*
  note:
  The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

  */