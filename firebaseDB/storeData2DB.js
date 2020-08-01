const form = document.querySelector('form');

//add document
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    //we basically gomna create/compile data in JS object format and then give to firebase db>collection which further converts this JS objects into documents.
    const recipe = {
        //recipe:id of our input field
        name: form.recipe.value.trim(),
        created_at: firebase.firestore.Timestamp.fromDate(now)
        //firebase timestamp has different format than our JS date, so here we just parsed our JS date into firebase timestamp using firestore library
    };
    //note: it is not necessary to mention every properties/fields from our db/collection, if no value is passed they are set to empty. 

    //adding data to our firebase collection using add(). and wkt the process is async.
    db.collection('recepies').add(recipe).then(() => {
        alert('recipe added!');
    }).catch(err => console.log(err));

    //resets form field
    form.reset();
});