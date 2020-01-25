import renderSpeakers from './render-speakers.js';
import { getProducts } from '../common/utils.js';

const speakers = getProducts();
const list = document.getElementById('speakers');

const button = document.querySelector('button');

button.addEventListener('click', (eventrefresh) => {
    eventrefresh.preventDefault();
    const form = document.querySelector('form');
    const data = new FormData(form);

    const numberizedPrice = Number(data.get('price'));
    const newSpeaker = {
        name: data.get('name'),
        id: data.get('id'),
        price: '$' + numberizedPrice.toFixed(2),
        image: data.get('image')
    };
    speakers.push(newSpeaker);

    const stringySpeaker = JSON.stringify(speakers);
    localStorage.setItem('speaker', stringySpeaker);
    // build the new list item element
    const element = renderSpeakers(newSpeaker);
    // remove the button
    element.querySelector('button').remove();
    // add the element to the list
    list.appendChild(element);

});

for (let i = 0; i < speakers.length; i++) {
    const speaker = speakers[i];
    const element = renderSpeakers(speaker);
    element.querySelector('button').remove();

    list.appendChild(element);
}


