

{/* <div class="Summary">
                <h2>Summary</h2>
                <ul class="itmes">
                    <li class="item">
                        <span class="itme__name">Pizza</span>
                        <span class="itme__price">Pizza</span>
                    </li>
                </ul>
                <p class=summary__total>
                    <span>Total:</span>
                    <span>$9.99</span>
                </p> */}
function renderSummaySection(state){
    const summarySection = document.createElement('div');
    summarySection.classList.add('Summary');

    const title = renderTitle('Summary');
    const items = renderItems(state);
    const summaryTotoal = renderSummaryTotal();

    summarySection.append(title, items, summaryTotoal);
    return summarySection;
}



