let fruits = ['apple','kiwi','orange'];

let i = 0;
while(i < fruits.length){
    console.log(fruits[i]);
    i++;
}

//do while
i = 0;
console.log('Do While:');
do{
    console.log(fruits[i]);
    i++;
}
while(i > fruits.length);

//if and else

let pass = 'srt@123*.*';
if(pass.length >= 8)
  console.log('Strong password!');
else
  console.log('Password too weak!');