import { state } from './renderPizzaCreator';
export function renderSummaryTotal(){
    const { totalPrice } = state;

    const summaryTotal = document.createElement('p');
    summaryTotal.classList.add('total');

    const totalDescription = document.createElement('span');
    totalDescription.innerHTML = 'Total :';

    const totalPriceSpan = document.createElement('span');
    totalPriceSpan.innerHTML = '$' +  totalPrice;

    summaryTotal.append(totalDescription, totalPriceSpan);

    return summaryTotal;
}