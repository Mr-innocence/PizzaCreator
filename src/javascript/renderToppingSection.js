import { state } from './renderPizzaCreator';
import {renderTitle} from './renderTitle';
import {renderToppings} from './renderToppings';


export function renderToppingSection(){
    const toppingSection = document.createElement('div');
    toppingSection.classList.add('toppings');
    const title = renderTitle('Choose Your Toppings');
    const toppingsDiv = renderToppings(state);
    toppingSection.append(title, toppingsDiv);

    return toppingSection;
}