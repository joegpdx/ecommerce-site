import speakers from '../data/speakers.js';
import renderSpeakers from './render-speakers.js';

const list = document.getElementById('speakers');

for (let i = 0; i < speakers.length; i++) {
    const speaker = speakers[i];
    const dom = renderSpeakers(speaker);
    list.appendChild(dom);
}
