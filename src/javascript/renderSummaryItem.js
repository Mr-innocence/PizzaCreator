import {topping} from './renderSummaryItems'
export function renderSummaryItem(){
    const { name, price } = topping;
    const item = document.createElement('li');
    item.classList.add('item');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('item__name');
    nameSpan.innerHTML = name;

    const priceSpan = document.createElement('span');
    priceSpan.classList.add('item__price');
    priceSpan.innerHTML = '$' + price;

    item.append(nameSpan, priceSpan);

    return item;
}