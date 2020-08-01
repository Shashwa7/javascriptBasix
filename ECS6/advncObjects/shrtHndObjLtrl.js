// ES6: Write Concise Object Literal Declarations Using Object Property Shorthand

//ES6 adds some nice support for easily defining object literals.

const setPlayer = (name,score) => ({
    name: name,
    score: score
});

//the function sets object properties name and score with with the recieved values name and score

//same thing can be written as
                  // args             //obj properties
const setPlayer = (name, score) => ({name, score});
setPlayer('shashwat',212); //{name: "shashwat", score: 212}

/*
while defining object like this make sure args declaration names must be equal with the object's properties names.

eg:  args            property
  string(name) === string(name);
  string(score) !== string(plyScore);
*/