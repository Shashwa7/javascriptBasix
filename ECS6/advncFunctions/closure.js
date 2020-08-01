//Closure is concept in context of nested function where the parent function's properties and vars are acessible by the child/nested function but vice versa is not true.

//child function local var is not visible to parent!
//cub can access greet but the lion can't access cuteGreet! 

const lion = () => {
    const greet = 'roar';

    const cub = () => {
        const cuteGreet = 'ruur';
        console.log(`Papa: ${greet} and child ${cuteGreet}`);
    }
    return cub; //returning cub function body 
}

const lioness = lion(); //defining lioness function by returning cub function
lioness(); // o/p: roar

