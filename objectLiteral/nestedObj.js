const  std ={
    'name': 'Shashwat',
    'parent':{
        'father': 'Rakesh',
        'mother': 'Sadhana'
    },
    'marks':{
        'wd': 'A',
        'cyber': 'A+',
        'ds': 'A',
        'french': 'B'
    }
}

//using '.' to access items
console.log(std.parent.mother);

//using brackets [] to acess items
console.log(std['marks']['french']);

//usign mixture
console.log(std.marks['cyber']);

//other example
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];

  //accessing pine tree
  var secondTree = myPlants[1].list[1];
  console.log(secondTree);
  