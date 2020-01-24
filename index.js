function renderTopping(topping, active){
    const { name, srcImg } = topping;
    const toppingDiv = document.createElement('div');
    toppingDiv.classList.add('topping');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('toppingBtn');
    nameSpan.innerHTML = name;

    const toppingImg = document.createElement('img');
    toppingImg.src = srcImg;
    toppingImg.alt = name;

    toppingDiv.append(toppingImg, nameSpan);

    if(active){
        setActive(toppingDiv);
    }

    return toppingDiv;
}

function setActive(toppingDiv){
    toppingDiv.classList.add('topping--active');

}

function renderToppings({ toppings, selectedToppingNames }){
    const toppingsDiv = document.createElement('div');
    toppingsDiv.classList.add('toppings__container');

    function getToppingDiv(topping){
        const { name } = topping;
        const active = selectedToppingNames.includes(name);
        return renderTopping(topping, active)
    }

    const toppingDivs = toppings.map(getToppingDiv);
    toppingsDiv.append(...toppingDivs);
    return toppingsDiv;
}

function renderTitle(title){
    const sectionTitle = document.createElement('h2');
    sectionTitle.innerText = title;
    return sectionTitle;
}

function renderChooseYourTopping({toppings, selectedToppingNames}){
    const toppingSection = document.createElement('div');
    toppingSection.classList.add('toppings');
    const title = renderTitle('Choose Your Toppings');
    const toppingsDiv = renderToppings({toppings, selectedToppingNames});
    toppingSection.append(title, toppingsDiv);

    return toppingSection;
}

function renderPizzaCreator(){
    const pizzaCreator = document.createElement('div');
    pizzaCreator.classList.add('container');

    const chooseYourTopping = renderChooseYourTopping({
        toppings: [
            {
                name : 'anchovy',
                srcImg: 'src/assets/toppings/anchovy.svg',
                price: 0.99,
            },
            {
                name : 'bacon',
                srcImg: 'src/assets/toppings/bacon.svg',
                price: 0.99,
            },
            {
                name : 'basil',
                srcImg: 'src/assets/toppings/basil.svg',
                price: 0.99,
            },
            {
                name : 'chili',
                srcImg: 'src/assets/toppings/chili.svg',
                price: 0.99,
            },
            {
                name : 'mozzarella',
                srcImg: 'src/assets/toppings/mozzarella.svg',
                price: 0.99,
            },
            {
                name : 'mushroom',
                srcImg: 'src/assets/toppings/mushroom.svg',
                price: 0.99,
            },
            {
                name : 'olive',
                srcImg: 'src/assets/toppings/olive.svg',
                price: 0.99,
            },
            {
                name : 'onion',
                srcImg: 'src/assets/toppings/onion.svg',
                price: 0.99,
            },
            {
                name : 'pepper',
                srcImg: 'src/assets/toppings/pepper.svg',
                price: 0.99,
            },
            {
                name : 'pepperoni',
                srcImg: 'src/assets/toppings/pepperoni.svg',
                price: 0.99,
            },
            {
                name : 'sweetcorn',
                srcImg: 'src/assets/toppings/sweetcorn.svg',
                price: 0.99,
            },
            {
                name : 'tomato',
                srcImg: 'src/assets/toppings/tomato.svg',
                price: 0.99,
            }],
        selectedToppingNames: ['tomato']
    });

    pizzaCreator.append(chooseYourTopping);
    return pizzaCreator;
}