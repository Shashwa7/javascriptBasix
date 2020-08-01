// map method 
/*
>It is similar to filter but here we can manipulate array elements and store them seperatly in newly created array.

>It can be a destructive method too if not taken care off while returning object, which means the original array set  can be altered.
*/
const prices = [20, 10, 30, 25, 15,10 , 80, 5];

const salePrices = prices.map(price => {
    return price/2;
});

console.log('MRP: ',prices);
console.log('Sale Price (mrp/2):',salePrices);

//real life ex;
//10% off on any product costs more than 1000 bucks;

const products = [

    {name: 'Nike Air 90', price: 5400},
    {name: 'Coffee', price: 300},
    {name: 'printer', price: 2400},
    {name: 'Earphones', price: 1300},
    {name: 'Chocos', price: 450},
    {name: 'Red Bull', price: 360},
    {name: 'Nachos', price: 300},
];

const products_valid_for_discount = products.map(product => 
{
    if(product.price > 1000){
    
    /*Destructivve way~ will update the original array elements. Avoid this

    product.price -= product.price * 0.1;
    return product;
    
    */

    // Safe approach
    // returning object with updated prices
    return {name: product.name, price: (product.price - product.price* 0.1)};

    }else{
        //returning object as it is
        return product;
    }
});

console.log(products_valid_for_discount);
console.log(products);