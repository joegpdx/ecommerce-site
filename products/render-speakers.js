import { findById, toUSD } from '../common/utils.js';

function renderSpeakers(speakers) {
    const li = document.createElement('li');
    li.className = speakers.category;
    li.title = speakers.description;

    const h3 = document.createElement('h3');
    h3.textContent = speakers.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = speakers.image;
    img.alt = speakers.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(speakers.price);

    const usd = '$' + speakers.price.toFixed(2);
    p.textContent = usd;
    p.textContent = toUSD(speakers.price);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = speakers.id;
    button.addEventListener('click', () => {

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }

        let lineItem = findById(cart, speakers.id);
        if (!lineItem) {
            lineItem = {
                id: speakers.id,
                quantity: 1
            };
            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;
        }
        json = JSON.stringify(cart);

        localStorage.setItem('CART', json);
        // alert('1' + speakers.name + 'add to cart');

    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderSpeakers;