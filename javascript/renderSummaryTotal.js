function renderSummaryTotal(state){
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