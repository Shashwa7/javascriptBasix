// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

function updateRecords(id, prop, value) {
    if (value === '')
        delete collection[id][prop];
    else if (prop === 'tracks') {
        //checking if the property track is empty

        // if no -> no changes or //if yes -> creating a new empty array with property name 'tracks'
        collection[id][prop] = collection[id][prop] || [];


        //once the array is created push the value
        collection[id][prop].push(value);
    }
    else {

        //if the value isn't empty and the property isn't tracks
        //then simple just update the current property value
        //or if the property doesn't exists then create one and initialise it with the passed value
        collection[id][prop] = value; //updating or initializing the passed value
    }

    return collection;
}

updateRecords(5439, "artist", "ABBA");
updateRecords(5439, 'tracks', 'dancing queen');
updateRecords(5439, 'tracks', 'chiquitita');
console.log(collection);
