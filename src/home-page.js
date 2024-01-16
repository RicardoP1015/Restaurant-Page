import pizzaria from './assets/pizzaria.png'
function createHeader() {
    const header = document.createElement('header');

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    header.appendChild(logoDiv);

    const logoImage = document.createElement('img')
    logoImage.src = pizzaria;
    logoDiv.appendChild(logoImage)

    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');
    header.appendChild(navBar);

    const navList = document.createElement('ul');
    navList.classList.add('nav-list');
    navBar.appendChild(navList);

    const menuItems = ['Menu', 'Order', 'Contact'];

    menuItems.forEach(itemText => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        listItem.textContent = itemText;
        navList.appendChild(listItem);
    });

    return header
}

export default createHeader;
