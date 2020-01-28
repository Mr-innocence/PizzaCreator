export function renderUserDetail(detail){
    const { name, value } = detail;
    const userDetail = document.createElement('div');
    userDetail.classList.add('detail');

    const detailLabel = document.createElement('label');
    detailLabel.for = name;
    detailLabel.innerHTML = name;

    const detailInput = document.createElement('input');
    detailInput.name = name;
    detailInput.id = name;
    detail.value = value;

    userDetail.append(detailLabel, detailInput);

    return userDetail;
}