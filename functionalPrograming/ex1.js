//attempt before learning functinal programing concept


//Implement a feuture:
// Add items to cart
//Add 3% tax to item in cart
//buy item: cart --> purchases
//Empty cart


const user = {
    name: 'Kalob',
    active: true,
    cart: [],
    purchase: []
}

const total = cstmr => {
    let sumTotal = 0;
    cstmr.purchase.forEach(price => {
        sumTotal += price;
    });

    return sumTotal;
}

const purchaseItem = (cstmr, item, buy) => {
    if (cstmr.active) {
        cstmr.cart.push(item.name);
        cstmr.purchase.push((item.price * .03) + item.price);
        if (buy) {
            console.log(`You have successfully purchased ${item.name}!`);
            cstmr.cart.pop(item.name);
            cstmr.purchase.pop(item.price);
        }
    }
    else {
        console.log('log in to add items to the cart!')
    }
}

purchaseItem(user, { name: 'jbl extra Bass earphones', price: 2030 },true);
purchaseItem(user, { name: 'mivi aux cabel', price: 550 }, true);
purchaseItem(user, { name: '16gb sandisk usb', price: 1200 },true);

console.log(`Your cart: ${user.cart}`);
console.log(`Total: ${total(user)} <inc 3% tax>`)
