import renderSpeakers from './render-speakers.js';
import { getProducts, toUSD } from '../common/utils.js';

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
        price: toUSD(numberizedPrice),
        image: data.get('image')
    };
    speakers.push(newSpeaker);

    const stringySpeaker = JSON.stringify(speakers);
    localStorage.setItem('speaker', stringySpeaker);
    const element = renderSpeakers(newSpeaker);
    element.querySelector('button').remove();
    list.appendChild(element);

});

for (let i = 0; i < speakers.length; i++) {
    const speaker = speakers[i];
    const element = renderSpeakers(speaker);
    element.querySelector('button').remove();

    list.appendChild(element);
}


