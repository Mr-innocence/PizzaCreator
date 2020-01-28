import { state } from './renderPizzaCreator';
export function renderSummarySize(pizza){
    const { size, price } = pizza;
    const sizeItem = document.createElement('li');
    sizeItem.classList.add('item');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('item__name');
    nameSpan.innerHTML = size;

    const priceSpan = document.createElement('span');
    priceSpan.classList.add('item__price');
    priceSpan.innerHTML = '$' + price;

    sizeItem.append(nameSpan, priceSpan);
    return sizeItem;    
}