import { state } from './renderPizzaCreator';
import { render } from '../index';

export function onToppingDivClick(topping, actived){
    const { name, price } = topping;
    const { selectedToppingNames, totalPrice } = state;
    if(actived){
        deactivate();
        return;
    }
    activate();
    function activate(){
        const newSelectedToppingNames = [...selectedToppingNames, name];
        const newTotalPrice = totalPrice + price;
        state = {
            ...state,
            selectedToppingNames : [...newSelectedToppingNames],
            totalPrice : newTotalPrice,
        }
        render();
    }

    function deactivate(){
        const newSelectedToppingNames = selectedToppingNames.filter(toppingName => toppingName != name);
        const newTotalPrice = totalPrice - price;
        state = {
            ...state,
            selectedToppingNames : [...newSelectedToppingNames],
            totalPrice : newTotalPrice,
        }  
        render(); 
    }
}

export function renderTopping(topping, actived){
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