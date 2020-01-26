function renderSummaySection(state){
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



