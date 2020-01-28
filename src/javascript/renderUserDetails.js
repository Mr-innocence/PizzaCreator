const userDetailState = [
    {
        name : 'name',
        value : 'John Smith',

},
    {
        name : 'email',
        value : 'Enter your email',

},
    {
        name : 'confirm',
        value : 'Confirm your email',

},
    {
        name : 'address',
        value : 'Enter your address',

},
    {
        name : 'postcode',
        value : 'John Smith',

},
    {
        name : 'contactNumber',
        value : 'John Smith',
},
]

function renderUserDetails(){
    const userDetailsDiv = document.createElement('div');
    userDetailsDiv.classList.add('details__container');

    function getUserDetailDiv(detail){
        return renderUserDetail(detail);
    }

    const userDetails = userDetailState.map(getUserDetailDiv);


    userDetailsDiv.append(...userDetails);
    return userDetailsDiv;
}
