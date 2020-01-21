let toppingState = [
    {
        name : 'anchovy',
        srcImg: 'src/assets/toppings/anchovy.svg',
        price: 0.99,
    },
    {
        name : 'bacon',
        srcImg: 'src/assets/toppings/bacon.svg',
        price: 0.99,
    },
    {
        name : 'basil',
        srcImg: 'src/assets/toppings/basil.svg',
        price: 0.99,
    },
    {
        name : 'chili',
        srcImg: 'src/assets/toppings/chili.svg',
        price: 0.99,
    },
    {
        name : 'mozzarella',
        srcImg: 'src/assets/toppings/mozzarella.svg',
        price: 0.99,
    },
    {
        name : 'mushroom',
        srcImg: 'src/assets/toppings/mushroom.svg',
        price: 0.99,
    },
    {
        name : 'olive',
        srcImg: 'src/assets/toppings/olive.svg',
        price: 0.99,
    },
    {
        name : 'onion',
        srcImg: 'src/assets/toppings/onion.svg',
        price: 0.99,
    },
    {
        name : 'pepper',
        srcImg: 'src/assets/toppings/pepper.svg',
        price: 0.99,
    },
    {
        name : 'pepperoni',
        srcImg: 'src/assets/toppings/pepperoni.svg',
        price: 0.99,
    },
    {
        name : 'sweetcorn',
        srcImg: 'src/assets/toppings/sweetcorn.svg',
        price: 0.99,
    },
    {
        name : 'tomato',
        srcImg: 'src/assets/toppings/tomato.svg',
        price: 0.99,
    }];

let chosenToppingNamesState = [];
let toppingsDiv = document.querySelector('.toppings__container');
let toppingDivs = renderToppingDivs(toppingState, chosenToppingNamesState);
toppingsDiv.append(...toppingDivs);

let summaryListDiv = document.querySelector('.summaryList');
let items = document.createElement('div');
items.classList.add('items');

let summaryItems = renderItems(toppingState, chosenToppingNamesState);
summaryListDiv.append(...summaryItems);

let summaryTotal = document.createElement('p');
summaryTotal.classList.add('total');
let totalDescription = document.createElement('span');
totalDescription.innerHTML = 'Total :';
let total = document.createElement('span');
let totalAmount = 0;
total.innerHTML = '$' +  totalAmount;
summaryTotal.append(totalDescription, total);

let spiltHr = document.createElement('hr');
summaryListDiv.append(items,spiltHr,summaryTotal);


function renderItems(toppings, chosenToppingNamesState){
    function renderItem({name, price}){
        const item = document.createElement('div');
        item.classList.add('item');
        if(chosenToppingNamesState.includes(name)){            
            const itemName = document.createElement('span');
            itemName.classList.add('item__name');
            itemName.innerHTML = name;
            const itemPrice = document.createElement('span');
            itemPrice.classList.add('item__price');
            itemPrice.innerHTML = '$' + price;
            item.append(itemName, itemPrice);
            item.classList.add('item');
        }       
        return item;
    }    
    return toppings.map(renderItem);    
}






function toppingOnClick(chosenToppingNamesState, {name, price}){
    let newChosenToppingNamesState = [];
    if(chosenToppingNamesState.includes(name)){
        newChosenToppingNamesState = chosenToppingNamesState.filter(toppingName => toppingName != name);
        totalAmount = (totalAmount *1000 - price*1000)/1000;
        console.log(totalAmount);

    }else{
        newChosenToppingNamesState = [...chosenToppingNamesState,name];
        totalAmount = (totalAmount *1000 + price*1000)/1000;
        console.log(totalAmount);
    }

    toppingsDiv.innerHTML = null;
    toppingDivs = renderToppingDivs(toppingState, newChosenToppingNamesState);
    toppingsDiv.append(...toppingDivs); 
    
    
    summaryListDiv.innerHTML = null;
    summaryItems = renderItems(toppingState, newChosenToppingNamesState);
    summaryListDiv.append(...summaryItems);

    summaryTotal = document.createElement('p');
    summaryTotal.classList.add('total');
    totalDescription = document.createElement('span');
    totalDescription.innerHTML = 'Total :';
    total = document.createElement('span');
    total.innerHTML = '$' +  totalAmount;
    summaryTotal.append(totalDescription, total);

    spiltHr = document.createElement('hr');
    summaryListDiv.append(items,spiltHr,summaryTotal);
}

function renderToppingDivs(toppings, chosenToppingNamesState){
    function renderToppingDiv({ name, srcImg, price}){
        const nameSpan = document.createElement('span');
        nameSpan.innerHTML = name;
        const toppingImg = document.createElement('img');
        toppingImg.src = srcImg;
        toppingImg.alt = name;

        const toppingDiv = document.createElement('div');
        toppingDiv.onclick = () => toppingOnClick(chosenToppingNamesState, { name, price});
        toppingDiv.classList.add('topping');

        toppingDiv.append(toppingImg, nameSpan);

        if(chosenToppingNamesState.includes(name))
        {
            toppingDiv.classList.add('topping--active');
        }
        return toppingDiv;
    }
    return toppings.map(renderToppingDiv);
}

