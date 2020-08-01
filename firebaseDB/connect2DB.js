const recipeList = document.querySelector('ul');

const addRecipe = (recipe, recipeID) => {

    //here we're attaching unqiue id's to each li tag
    //'data-xyzName' = "value", is a syntanx for custom data attribute
    let html = `
    <li class="list-group-item" data-id="${recipeID}">
        <span>${recipe.name}</span>
        <button class='btn btn-danger btn-sm my2 badge left'>Delete</button>
    </li>
 `;

    //.name is the property we can use with our doc.data()

    //appending the recipe to our list
    recipeList.innerHTML += html;
};


//collection() - here we pass string same as our db collection name, in our case 'recepies';
//get()- helps in fetch the document/data stored in that collection,
//collection().get() basically returns a promise and indeed a async process.
//using .then() in order to fetch data 
//snapshot is a data at particular instance(nothing but data, don't get confused).
db.collection('recepies').get().then((snapshot) => {

    /*
    //when we have the data
    console.log(snapshot);

    //here our snapshot has some methods and properties that we can use- now we are interested in 'docs' method which contains our documents in obj format.
    console.log(snapshot.docs[0].data());
    //docs is an array of objects. hence docs[0]: 1st data in the array;
    //.data() is used to parse the obj into JS readble obj.

    //using for each to retrive every data from the collection
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    });
    //now we just to add these file in our html */


    snapshot.docs.forEach(doc => {
        addRecipe(doc.data(), doc.id);
        //doc.id return unqiue id respective to our doc,
    });
}).catch(err => console.log(err));