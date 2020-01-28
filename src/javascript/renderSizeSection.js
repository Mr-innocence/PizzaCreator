import { renderTitle } from './renderTitle';
import { renderSizes } from './renderSizes';

export function renderSizeSection(){
    const sizeSection = document.createElement('div');
    sizeSection.classList.add('sizes');
    const title = renderTitle('Choose Your Pizzas');
    const sizes = renderSizes();

    sizeSection.append(title, sizes);
    return sizeSection;
}