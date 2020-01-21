let toppingState = [
    {
        name : 'anchovy',
        srcImg: 'src/assets/toppings/anchovy.svg',
        price: 0.99,
    },
    {
        name : 'bacon',
        srcImg: 'src/assets/toppings/bacon.svg',
        price: 0.99,
    },
    {
        name : 'basil',
        srcImg: 'src/assets/toppings/basil.svg',
        price: 0.99,
    },
    {
        name : 'chili',
        srcImg: 'src/assets/toppings/chili.svg',
        price: 0.99,
    },
    {
        name : 'mozzarella',
        srcImg: 'src/assets/toppings/mozzarella.svg',
        price: 0.99,
    },
    {
        name : 'mushroom',
        srcImg: 'src/assets/toppings/mushroom.svg',
        price: 0.99,
    },
    {
        name : 'olive',
        srcImg: 'src/assets/toppings/olive.svg',
        price: 0.99,
    },
    {
        name : 'onion',
        srcImg: 'src/assets/toppings/onion.svg',
        price: 0.99,
    },
    {
        name : 'pepper',
        srcImg: 'src/assets/toppings/pepper.svg',
        price: 0.99,
    },
    {
        name : 'pepperoni',
        srcImg: 'src/assets/toppings/pepperoni.svg',
        price: 0.99,
    },
    {
        name : 'sweetcorn',
        srcImg: 'src/assets/toppings/sweetcorn.svg',
        price: 0.99,
    },
    {
        name : 'tomato',
        srcImg: 'src/assets/toppings/tomato.svg',
        price: 0.99,
    }];

let chosenToppingNamesState = [];

function toppingOnClick(chosenToppingNamesState, name){
    let newChosenToppingNamesState = [];
    if(chosenToppingNamesState.includes(name)){
        newChosenToppingNamesState = chosenToppingNamesState.filter(toppingName => toppingName != name);
    }else{
        newChosenToppingNamesState = [...chosenToppingNamesState,name];

    }
    let toppingsDiv = document.querySelector('.toppings__container');
    toppingsDiv.innerHTML = null;

    const toppingDivs = renderToppingDivs(toppingState, newChosenToppingNamesState);
    toppingsDiv.append(...toppingDivs);    
}

const toppingsDiv = document.querySelector('.toppings__container');
const toppingDivs = renderToppingDivs(toppingState, chosenToppingNamesState);
toppingsDiv.append(...toppingDivs);



function renderToppingDivs(toppings, chosenToppingNamesState){
    function renderToppingDiv({ name, srcImg}){
        const nameSpan = document.createElement('span');
        nameSpan.innerHTML = name;
        const toppingImg = document.createElement('img');
        toppingImg.src = srcImg;
        toppingImg.alt = name;

        const toppingDiv = document.createElement('div');
        toppingDiv.onclick = () => toppingOnClick(chosenToppingNamesState, name);
        toppingDiv.classList.add('topping');

        toppingDiv.append(toppingImg, nameSpan);

        if(chosenToppingNamesState.includes(name))
        {
            toppingDiv.classList.add('topping--active');
        }
        return toppingDiv;
    }
    return toppings.map(renderToppingDiv);
}
