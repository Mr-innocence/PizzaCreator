import { state } from './renderPizzaCreator';
import { renderSize } from './renderSize';


export function renderSizes(){
    const sizesDiv = document.createElement('div');
    sizesDiv.classList.add('sizes__container');

    const { pizzas, selectedPizzaSize } = state; 
    function getPizzaDiv(pizza){
        const { size } = pizza;
        const actived = selectedPizzaSize == size;
        return renderSize(pizza, actived);
    }
    const sizes = pizzas.map(getPizzaDiv);
    sizesDiv.append(...sizes);
    return sizesDiv;
}
