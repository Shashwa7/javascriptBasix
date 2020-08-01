let user = {

    name: 'Shashwat',
    email: 'shashwa7@yahoo.com',

    //object array
    cart: [
        { item_name: 'Mivi Aux', mrp: '$35' },  //obj 1
        { item_name: 'Apple aibpods', mrp: '$260' },//obj2
        { item_name: 'iPhone 11 Pro', mrp: '$899' }
    ],

    //function to display cart items

    cartItems() {
        this.cart.forEach(product => {
            console.log(`Product: ${product.item_name}, Price: ${product.mrp}`);
        });
    }
};

user.cartItems();