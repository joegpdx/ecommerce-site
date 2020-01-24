import speakers from '../data/speakers.js';
import {
    findById,
    calcOrderTotal,
    toUSD
} from '../common/utils.js';
import renderLineItem from './render-line-items.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total');
const ordernowbutton = document.getElementById('order-now');

const json = localStorage.getItem('CART');

let cart;
if (json) {
    cart = JSON.parse(json);
}
else {
    cart = [];
}
for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const speaker = findById(speakers, lineItem.id);
    const dom = renderLineItem(lineItem, speaker);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, speakers);
orderTotalCell.textContent = toUSD(orderTotal);

if (cart.length === 0) {
    ordernowbutton.disabled = true;
}
else {
    ordernowbutton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('confirmed-Order' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });

}