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
const toppingDivs = renderToppingDivs(toppingSelected);
toppingsDiv.append(toppingDivs);



function renderToppingDivs(toppings){
    function renderToppingDiv({ name, srcImg}){
        const nameSpan = document.createElement('span');
        nameSpan.innerHTML = name;
        const toppingImg = document.createElement('img');
        toppingImg.src = srcImg;
        toppingImg.alt = name;

        const toppingDiv = document.createElement('div');
        toppingDiv.classList.add('topping');

        toppingDiv.append(toppingImg, nameSpan);

        if(toppingSelected)
        {
            toppingDiv.classList.add('topping--active');
        }
        return toppingDiv;
    }
    return toppings.map(renderToppingDiv);
}
