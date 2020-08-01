//deleting data

//note:: we cannot just specify the name or the time stamp of the recipe while deleting it because there can be multiple files with same name and the same time stamps, inorder to delete the specific recipe we must try using the respective unqiue id.

//instead of applying event listener on buttons  we instead apply on the ul list (event delegation);

recipeList.addEventListener('click', e => {
    // to check when the list was cliked, it was the button or something else,
    if(e.target.tagName === "BUTTON")
    { 
        //referring to its parent(li tag) element attribute(id).
        const id = e.target.parentElement.getAttribute('data-id');

        db.collection('recepies').doc(id).delete()
            .then(() => console.log("recipe deleted!"))
            .catch(err => console.log(err));
    }
});
