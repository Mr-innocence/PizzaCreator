{/* <ul class="items">
    <li class="item">
        <span class="itme__name">Pizza</span>
        <span class="itme__price">9.99</span>
    </li>
    <li class="item">
        <span class="itme__name">Pizza</span>
        <span class="itme__price">9.99</span>
    </li>
    <li class="item">
        <span class="itme__name">Pizza</span>
        <span class="itme__price">9.99</span>
    </li>
</ul> */}

function renderItems(state){
    const { toppings, selectedToppingNames } = state;
    const itemsList = document.createElement('ul');
    itemsList.classList.add('items');
    
    function getItemDiv(topping){
        const { name } = topping;
        const actived = selectedToppingNames.includes(name);
        if(actived){
           return renderItem(topping);
        }
        return;
    }
    const itemsDiv = toppings.map(getItemDiv);
    const valideDiv = itemsDiv.filter(item => item != undefined);
    itemsList.append(...valideDiv);
    return itemsList;
}