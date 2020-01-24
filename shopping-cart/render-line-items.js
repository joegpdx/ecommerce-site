import { toUSD } from '../common/utils.js';

function renderLineItem(lineItem, speakers) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = speakers.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(speakers.price);
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'order-total';
    const total = lineItem.quantity * speakers.price;
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;
}

export default renderLineItem;