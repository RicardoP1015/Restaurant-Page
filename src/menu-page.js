import chicaFnaf from './assets/chicaFNAF.png'
import fnafPizza from './assets/fnafPizzaPie.png'
import fnafBurger from './assets/freddyBurger.png'
import fnafPasta from './assets/chicaBonniePasta.png'
import fnafFries from './assets/foxyFries.png'
import texts from './text';
import { createHeader, createFooter } from './home-page';
import { makeElement, setupNavigation } from './website';

function createMenu() {
    const main = document.createElement('main');
    main.classList.add('main-menu')

    const menuContainer = makeElement('div', 'menu-container', main);
    const chicaWrapper = makeElement('div', 'chica', menuContainer);
    const chicaHeader = makeElement('h3', null, chicaWrapper, `Let's Eat`);
    const chicaImgWrapper = makeElement('div', 'fnaf-img', chicaWrapper);
    const chicaImg = makeElement('img', null, chicaImgWrapper, null, 'src', chicaFnaf);

    const menuWrapper = makeElement('div', 'menu-wrapper', menuContainer);

    const menuItem1 = makeElement('div', 'menu-item', menuWrapper);
    const menuImgWrapper1 = makeElement('div', 'menu-img', menuItem1);
    const menuPizza = makeElement('img', null, menuImgWrapper1, null, 'src', fnafPizza);
    const menuHeader1 = makeElement('h3', null, menuItem1, 'Pizza');
    const menuItemInfo1 = makeElement('p', null, menuItem1, texts.menuText);

    const menuItem2 = makeElement('div', 'menu-item', menuWrapper);
    const menuImgWrapper2 = makeElement('div', 'menu-img', menuItem2);
    const menuBurger = makeElement('img', null, menuImgWrapper2, null, 'src', fnafBurger);
    const menuHeader2 = makeElement('h3', null, menuItem2, 'Burger');
    const menuItemInfo2 = makeElement('p', null, menuItem2, texts.menuText);

    const menuItem3 = makeElement('div', 'menu-item', menuWrapper);
    const menuImgWrapper3 = makeElement('div', 'menu-img', menuItem3);
    const menuPasta = makeElement('img', null, menuImgWrapper3, null, 'src', fnafPasta);
    const menuHeader3 = makeElement('h3', null, menuItem3, 'Pasta');
    const menuItemInfo3 = makeElement('p', null, menuItem3, texts.menuText);

    const menuItem4 = makeElement('div', 'menu-item', menuWrapper);
    const menuImgWrapper4 = makeElement('div', 'menu-img', menuItem4);
    const menuFries = makeElement('img', null, menuImgWrapper4, null, 'src', fnafFries);
    const menuHeader4 = makeElement('h3', null, menuItem4, 'Fries');
    const menuItemInfo4 = makeElement('p', null, menuItem4, texts.menuText);

    return main
}

const loadMenuPage = () => {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';

    contentContainer.appendChild(createHeader());
    contentContainer.appendChild(createMenu());
    contentContainer.appendChild(createFooter());

    setupNavigation();
}

export default loadMenuPage;