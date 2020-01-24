let state = {
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
}

function onToppingDivClick(topping, actived){
    const { name } = topping;
    const { selectedToppingNames } = state;
    if(actived){
        deactivate();
        return;
    }
    activate();

    function activate(){
        const newSelectedToppingNames = [...selectedToppingNames, name];
        state = {
            ...state,
            selectedToppingNames : [...newSelectedToppingNames]
        }

        render()
    }

    function deactivate(){
        const newSelectedToppingNames = selectedToppingNames.filter(toppingName => toppingName != name);
        state = {
            ...state,
            selectedToppingNames : [...newSelectedToppingNames]
        }  
        render() 
    }


}
function renderTopping(topping, actived){
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
    toppingDiv.onclick = () => onToppingDivClick(topping, actived);
    function setActive(toppingDiv){
        toppingDiv.classList.add('topping--active');
    }

    if(actived){
        setActive(toppingDiv);
    }


    return toppingDiv;
}



function renderToppings(){
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

function renderTitle(title){
    const sectionTitle = document.createElement('h2');
    sectionTitle.innerText = title;
    return sectionTitle;
}

function renderChooseYourTopping(){
    const toppingSection = document.createElement('div');
    toppingSection.classList.add('toppings');
    const title = renderTitle('Choose Your Toppings');
    const toppingsDiv = renderToppings();
    toppingSection.append(title, toppingsDiv);

    return toppingSection;
}

function renderPizzaCreator(){
    const pizzaCreator = document.createElement('div');
    pizzaCreator.classList.add('container');

    const chooseYourTopping = renderChooseYourTopping();

    pizzaCreator.append(chooseYourTopping);
    return pizzaCreator;
}

function render(){
    const root  = document.querySelector('#root');
    root.innerHTML = null;
    const pizzaCreator = renderPizzaCreator();
    root.append(pizzaCreator);
}