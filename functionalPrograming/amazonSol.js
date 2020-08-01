//attempt after learning functional programing concepts

//Implement a feuture:
// Add items to cart
//Add 3% tax to item in cart
//buy item: cart --> purchases
//Empty cart


const user = {
    name: 'Kalob',
    active: true,
    cart: [],
    purchases: []
}


/* approach 1

console.log(purchaseItem(user, {name: 'laptop', price: 200}));
console.log(user);
function purchaseItem(user, item) {

    creating a copy of the original obj and updating its key 'purchase' with the recieved value: item.
                   empty obj  original  updating  
    return Object.assign({}, user, {purchase: item});

}; //pure func

> this approach is way too simple but it bcomes in-effcient when dealing with more funcs, we might implement compose functionality here 

*/

//approach 2: composing all func R -> L fashion

const compose = (f, g) => (...args) => f(g(...args));
//invoking func
let updtUser = purchaseItem(
    emptyCart,
    buyItem,
    applyTax2Items,
    addItem2Cart
)(user, { name: 'laptop', price: 200 })
 // ...args

function purchaseItem(...funcs) {
   return funcs.reduce(compose)
};

function addItem2Cart(user,item) { 
    const updateCart = user.cart.concat(item);
    console.log("addItem2Cart: ",Object.assign({}, user,{cart : updateCart}));
    return Object.assign({}, user,{cart : updateCart});
};

function applyTax2Items(user) { 
    
    const {cart} = user; //shorthand
   //or const cart = user.cart; 

    const taxRate = 0.03; //3% tax
    const updateCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price + item.price*taxRate
        }
    })
    console.log("applyTax2Items :",Object.assign({}, user,{cart : updateCart}));
    return Object.assign({}, user,{cart : updateCart});
};

function buyItem(user) { 
    //moving cart item to purchase

    console.log("buyItem :",Object.assign({}, user,{purchases : user.cart}));
    return Object.assign({}, user,{purchases : user.cart});
};

function emptyCart(user) { 
    console.log("emptyCart: ",Object.assign({}, user,{cart : []}));
    return Object.assign({}, user,{cart : []});
};

console.log(updtUser);



