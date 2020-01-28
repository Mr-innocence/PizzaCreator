function renderUserSection(){
    const userSection = document.createElement('div');
    userSection.classList.add('details');
    const title = renderTitle('Enter your details');
    const details = renderUserDetails();

    userSection.append(title, details);
    return userSection;
}