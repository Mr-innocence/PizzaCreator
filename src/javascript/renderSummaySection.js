import { state } from './renderPizzaCreator';
import {renderTitle} from './renderTitle';
import {renderSummaryItems} from './renderSummaryItems';
import {renderSummaryTotal} from './renderSummaryTotal';

export function renderSummaySection(){
    const summarySection = document.createElement('div');
    summarySection.classList.add('Summary');

    const title = renderTitle('Summary');
    const items = renderSummaryItems(state);
    const summaryTotoal = renderSummaryTotal(state);

    const seperateHr = document.createElement('hr');

    const submitButton = document.createElement('button');
    submitButton.innerText = "Submit";
    submitButton.classList.add('submitOrder');

    summarySection.append(title, items, seperateHr, summaryTotoal, submitButton);
    return summarySection;
}



