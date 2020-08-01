//it also itereate through each array items, once the condition becomes true for the very 1st time it returns the value and terminated the function or breaks out of function. 
 
const scores = [10,5,12,32,54,77];

const FirstHighScore = scores.find(score => score >35); 
    // if condition becomes it breaks out of the loop);

console.log('First High Score: ',FirstHighScore);
