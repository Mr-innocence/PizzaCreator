function render(){
    const root  = document.querySelector('#root');
    root.innerHTML = null;
    const pizzaCreator = renderPizzaCreator();
    root.append(pizzaCreator);
}