let state = {
    pizzas: [
        {
            size: 'small', 
            srcImg: './assets/size.png',
            price: 9.99,
        },
        {
            size: 'medium', 
            srcImg: './assets/size.png',
            price: 10.99,
        },
        {
            size: 'large', 
            srcImg: './assets/size.png',
            price: 11.99,
        },
    ],
    selectedPizzaSize :'small',
    toppings: [
        {
            name : 'anchovy',
            srcImg: './assets/toppings/anchovy.svg',
            price: 0.99,
        },
        {
            name : 'bacon',
            srcImg: './assets/toppings/bacon.svg',
            price: 0.99,
        },
        {
            name : 'basil',
            srcImg: './assets/toppings/basil.svg',
            price: 0.99,
        },
        {
            name : 'chili',
            srcImg: './assets/toppings/chili.svg',
            price: 0.99,
        },
        {
            name : 'mozzarella',
            srcImg: './assets/toppings/mozzarella.svg',
            price: 0.99,
        },
        {
            name : 'mushroom',
            srcImg: './assets/toppings/mushroom.svg',
            price: 0.99,
        },
        {
            name : 'olive',
            srcImg: './assets/toppings/olive.svg',
            price: 0.99,
        },
        {
            name : 'onion',
            srcImg: './assets/toppings/onion.svg',
            price: 0.99,
        },
        {
            name : 'pepper',
            srcImg: './assets/toppings/pepper.svg',
            price: 0.99,
        },
        {
            name : 'pepperoni',
            srcImg: './assets/toppings/pepperoni.svg',
            price: 0.99,
        },
        {
            name : 'sweetcorn',
            srcImg: './assets/toppings/sweetcorn.svg',
            price: 0.99,
        },
        {
            name : 'tomato',
            srcImg: './assets/toppings/tomato.svg',
            price: 0.99,
        }],
    selectedToppingNames: [],
    totalPrice:9.99
}


function renderPizzaCreator(){
    const pizzaCreator = document.createElement('div');
    pizzaCreator.classList.add('container');

    const userSection = renderUserSection();
    const sizeSection = renderSizeSection(state);
    const toppingSection = renderToppingSection(state);
    const summarySection = renderSummaySection(state);

    pizzaCreator.append(userSection,sizeSection, toppingSection, summarySection);
    return pizzaCreator;
}