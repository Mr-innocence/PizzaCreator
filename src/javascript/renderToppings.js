function renderToppings(state){
    const { toppings, selectedToppingNames } = state;
    const toppingsDiv = document.createElement('div');
    toppingsDiv.classList.add('toppings__container');

    function getToppingDiv(topping){
        const { name } = topping;
        const actived = selectedToppingNames.includes(name);
        return renderTopping(topping, actived)
    }

    const toppingDivs = toppings.map(getToppingDiv);
    toppingsDiv.append(...toppingDivs);
    return toppingsDiv;
}