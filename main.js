
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