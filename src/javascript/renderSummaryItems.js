
import { state } from './renderPizzaCreator';
import { renderSummarySize } from './renderSummarySize';
import { renderSummaryItem } from './renderSummaryItem';

export function renderSummaryItems(){  
    const { pizzas, selectedPizzaSize, toppings, selectedToppingNames, totalPrice } = state;
    function getSizeDiv(pizza){
        const { size, price } = pizza;
        if(size == selectedPizzaSize){
            const newTotalPrice = totalPrice + parseInt(price);
            state = {
                ...state,
                totalPirce: newTotalPrice
            }
            return renderSummarySize(pizza);
        }        
    }

    function getItemDiv(topping){
        const { name, price } = topping;
        const actived = selectedToppingNames.includes(name);
        if(actived){
           return renderSummaryItem(topping);
        }
        return;
    }


    const itemsList = document.createElement('ul');
    itemsList.classList.add('items');
    
    const sizeDiv = pizzas.map(getSizeDiv);
    const validSizeDiv = sizeDiv.filter(size => size != undefined);

    itemsList.append(...validSizeDiv);
    const itemsDiv = toppings.map(getItemDiv);
    const valideDiv = itemsDiv.filter(item => item != undefined);
    itemsList.append(...valideDiv);
    
    return itemsList;
}