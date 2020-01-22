
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

    const usd = '$' + speakers.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = speakers.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderSpeakers;