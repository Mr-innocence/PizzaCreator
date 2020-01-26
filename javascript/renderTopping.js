function onToppingDivClick(topping, actived){
    const { name } = topping;
    const { selectedToppingNames } = state;
    if(actived){
        deactivate();
        return;
    }
    activate();
    function activate(){
        const newSelectedToppingNames = [...selectedToppingNames, name];
        state = {
            ...state,
            selectedToppingNames : [...newSelectedToppingNames]
        }
        render()
    }

    function deactivate(){
        const newSelectedToppingNames = selectedToppingNames.filter(toppingName => toppingName != name);
        state = {
            ...state,
            selectedToppingNames : [...newSelectedToppingNames]
        }  
        render() 
    }
}

function renderTopping(topping, actived){
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