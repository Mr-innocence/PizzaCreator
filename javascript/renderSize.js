function renderSize(pizza, actived){
    const pizzaSize = document.createElement('div');
    const { size, srcImg, price } = pizza;
    pizzaSize.classList.add(size);
    pizzaSize.classList.add('size');

    const pizzaSizeImg = document.createElement('img');
    pizzaSizeImg.src = srcImg;

    if(actived){
        pizzaSizeImg.classList.add('size--active');
    }
    
    pizzaSize.onclick = () => onSizeDivClick(pizza, actived);
    
    const sizeName = document.createElement('div');
    sizeName.innerHTML = size;

    const sizePrice = document.createElement('div');
    sizePrice.innerHTML = price;

    const pizzaSizeDescription = document.createElement('div');
    pizzaSizeDescription.classList.add('sizeDescription');
    pizzaSizeDescription.append(sizeName, sizePrice);

    pizzaSize.append(pizzaSizeImg, pizzaSizeDescription);

    return pizzaSize;
}


function onSizeDivClick(pizza){
    const { size, price } = pizza;
    const { totalPrice } = state;
    const { pizzas, selectedPizzaSize } = state;
    function findLastChosenSize(pizzaInArray){
        const { size } = pizzaInArray;
        return size == selectedPizzaSize;
    }
    const lastChosenPizzaSize = pizzas.find(findLastChosenSize);
    console.log(lastChosenPizzaSize);
    const { price : lastPrice} = lastChosenPizzaSize;


    const newTotalPrice = totalPrice - lastPrice + price;

    const newSelectedPizzaSize = size;
    state = {
        ...state,
        selectedPizzaSize: newSelectedPizzaSize,
        totalPrice : newTotalPrice
    }
    render();
}

