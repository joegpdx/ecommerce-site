import { findById, toUSD } from '../common/utils.js';

const makeCart = () => {
    const somePossibleCart = localStorage.getItem('CART');

    if (somePossibleCart) {
        return JSON.parse(somePossibleCart);
    } else {
        return [];
    }
};

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

        const cart = makeCart();

        let thatIsAlreadyInCart = findById(cart, speakers.id);
        if (!thatIsAlreadyInCart) {
            const initialItem = {
                id: speakers.id,
                quantity: 1
            };
            cart.push(initialItem);
        }
        else {
            thatIsAlreadyInCart.quantity++;
        }

        const newCartState = JSON.stringify(cart);
        localStorage.setItem('CART', newCartState);
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderSpeakers;