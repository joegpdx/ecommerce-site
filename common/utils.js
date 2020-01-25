import speakers from '../data/speakers.js';

export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }
    return null;
}
export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency', currency: 'USD'
    });
}

export function calcLineItem(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

export function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcOrderTotal(cart, speakers) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const speaker = findById(speakers, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, speaker.price);
        orderTotal += lineTotal;
    }

    return roundCurrency(orderTotal);
}

const seedProducts = () => {
    const alreadyProducts = localStorage.getItem(seedProducts);

    if (!alreadyProducts) {
        const stringSpeakers = JSON.stringify(speakers);
        localStorage.setItem(seedProducts, stringSpeakers);
    }
};

export const getProducts = () => {
    seedProducts();

    const products = localStorage.getItem(seedProducts);
    const parsedPorducts = JSON.parse(products);

    return parsedPorducts;
};