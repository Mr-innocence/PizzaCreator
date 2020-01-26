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


function renderPizzaCreator(){
    const pizzaCreator = document.createElement('div');
    pizzaCreator.classList.add('container');

    const toppingSection = renderToppingSection(state);
    const summarySection = renderSummaySection(state);

    pizzaCreator.append(toppingSection, summarySection);
    return pizzaCreator;
}