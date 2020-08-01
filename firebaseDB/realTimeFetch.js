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
    recipeList.innerHTML += html;
};

//delete recipe
//note : while calling this func we are not actually deleting document from the firestore db we have done that seperately, but instead we are just gonna delete document from the DOM/html page;
const deleteRecipe = (id) =>{

    //here we are cycling through all the list items and comparing each recipe's data-id attribute value with the received id and removing them from the ul if true.
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
       
        if(recipe.getAttribute('data-id') === id)
            recipe.remove();
    });
}


//get documents
//'onSnapshot' : constantly recording the state of our document in realtime
//onSnapshot return the realtime snapshot and it has a property called docChanges() which basically monitors any changes made in our DB.
const realTimeListener = db.collection('recepies').onSnapshot(snapshot => {

    console.log(snapshot.docChanges()); //this returns our collection array of documents
    //docChanges has some properties like 'type' which basically tells whether the document was 'added' or 'removed'.

    snapshot.docChanges().forEach(change => {
        
        const doc = change.doc; //this returns the actual document; '.doc' is the property of our docChange() object.

        //now we seperatly gonna handle our docChange as per their type 'added' or 'removed'

        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
            //this will output the document on out html page
        }
        else if(change.type === 'removed'){
                deleteRecipe(doc.id);
        }   

    })
})