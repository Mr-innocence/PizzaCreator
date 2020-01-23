function renderTopping({ toppings, active }){
    const {name, srcImg } = toppings;
    const toppingDiv = document.createElement('div');
    toppingDiv.classList.add('topping');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('toppingBtn');
    nameSpan.innerHTML = name;

    const toppingImg = document.createElement('img');
    toppingImg.src = srcImg;
    toppingImg.alt = name;

    toppingDiv.append(nameSpan, toppingImg);

    if(active){
        setActive();
    }

    return toppingDiv;
}

function renderToppings({toppings, selectedToppingNames}){
{
    const toppingsDiv = document.createElement('div');
    toppingsDiv.classList.add('toppings__container');

    const { name } = toppings;
    const active = selectedToppingNames.includes(name);

    const toppingDivs = toppings.map(renderTopping({toppings, active}));
    toppingsDiv.append(...toppingDivs);
    return toppingsDiv;

}