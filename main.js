let toppingState = [
        {
            name = 'anchovy',
            srcImg: 'src/assets/toppings/anchovy.svg'},
        {
            name = 'bacon',
            srcImg: 'src/assets/toppings/bacon.svg'},
        {
            name = 'basil',
            srcImg: 'src/assets/toppings/basil.svg'},
        {
            name = 'chili',
            srcImg: 'src/assets/toppings/chili.svg'},
        {
            name = 'mozzarella',
            srcImg: 'src/assets/toppings/mozzarella.svg'},
        {
            name = 'mushroom',
            srcImg: 'src/assets/toppings/mushroom.svg'},
        {
            name = 'olive',
            srcImg: 'src/assets/toppings/olive.svg'},
        {
            name = 'onion',
            srcImg: 'src/assets/toppings/onion.svg'},
        {
            name = 'pepper',
            srcImg: 'src/assets/toppings/pepper.svg'},
        {
            name = 'pepperoni',
            srcImg: 'src/assets/toppings/pepperoni.svg'},
        {
            name = 'sweetcorn',
            srcImg: 'src/assets/toppings/sweetcorn.svg'},
        {
            name = 'tomato',
            srcImg: 'src/assets/toppings/tomato.svg'},
    ];



let toppingSelected = true;
const toppingsDiv = document.querySelector('.toppings__container');
const anchovyToppingDiv = renderToppingButton(toppingSelected);
toppingsDiv.append(anchovyToppingDiv);


function setToppingSelectedState(){
    toppingSelected = !toppingSelected;
    const toppingsDiv = document.querySelector('.toppings__container');
    const anchovyToppingDiv = renderToppingButton(toppingSelected);
    toppingsDiv.append(anchovyToppingDiv);
}

function renderToppingButton(toppingSelected = false){
    const nameSpan = document.createElement('span');
    nameSpan.innerHTML = "Anchovy";
    const toppingImg = document.createElement('img');
    toppingImg.src = 'src/assets/toppings/anchovy.svg';
    toppingImg.alt = 'Anchovy';

    const toppingDiv = document.createElement('div');
    toppingDiv.classList.add('topping');

    toppingDiv.append(toppingImg, nameSpan);

    if(toppingSelected)
    {
        toppingDiv.classList.add('topping--active');
    }

    toppingDiv.onclick = setToppingSelectedState;

    return toppingDiv;
}