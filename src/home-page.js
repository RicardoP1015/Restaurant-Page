import pizzaria from './assets/pizzaria.png';
import fnafBg from './assets/FNAF-bg.png';
import williamAfton from './assets/WilliamAfton.png';
import fnafFreddy from './assets/freddyFNAF.png'
import fnafBonnie from './assets/bonnieFNAF.png'
import fnafChica from './assets/chicaFNAF.png';
import fnafFoxy from './assets/foxyFNAF.png';
import { makeElement } from './website';
import { setupNavigation } from './website';
import texts from './text';

function createHeader() {
    const header = document.createElement('header');

    const logoDiv = makeElement('div', 'logo', header)
    const logoImage = makeElement('img', null, logoDiv, null, 'src', pizzaria);
    logoImage.setAttribute('id', 'homeBtn')
    const navBar = makeElement('nav', 'nav-bar', header);
    const navList = makeElement('ul', 'nav-list', navBar);
    const menuItems = ['Menu', 'Order', 'Contact'];

    menuItems.forEach((itemText, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        listItem.textContent = itemText;
    
        switch (index) {
            case 0:
                listItem.setAttribute('id', 'menuBtn');
                break;
            case 1:
                listItem.setAttribute('id', 'orderBtn');
                break;
            case 2:
                listItem.setAttribute('id', 'contactBtn');
                break;
        }
    
        navList.appendChild(listItem);
    });

    return header;
}

function createMain() {
    const main = document.createElement('main');

    const aboutUsContainer = makeElement('div', 'about-us-container', main);
    const aboutUsImgWrapper = makeElement('div', 'about-us-img', aboutUsContainer);
    const aboutUsImg = makeElement('img', null, aboutUsImgWrapper, null, 'src', fnafBg);
    const aboutUsP = makeElement('p', 'about-us', aboutUsContainer, texts.aboutUSText);

    const founderTitle = makeElement('div', 'founder-header', main);
    const founderHeader = makeElement('h3', null, founderTitle, 'Founder');
    const ownerWrapper = makeElement('div', 'owner-wrapper', main);
    const ownerSection = makeElement('div', 'owner-section', ownerWrapper);
    const ownerImageWrapper = makeElement('div', 'owner-img',  ownerSection);
    const ownerImage = makeElement('img', null, ownerImageWrapper, null, 'src', williamAfton);
    const ownerHeader = makeElement('h3', null, ownerSection, 'Proud Owner');
    const ownerName = makeElement('div', 'name', ownerSection, 'William Afton');
    const aboutOwnerWrapper = makeElement('div', 'about-wrapper', ownerWrapper);
    const aboutOwnerHeader = makeElement('h3', null, aboutOwnerWrapper, 'About our Amazing Founder');
    const aboutOwnerP = makeElement('p', 'about-owner', aboutOwnerWrapper, texts.aboutOwnerText);

    const animatronicSection = makeElement('div', 'animatronic-section' , main);
    const animatronicSectionHeader = makeElement('h2', null, animatronicSection, 'Amazing Creations');

    const animatronicWrapper1 = makeElement('div', 'animatronic-wrapper', animatronicSection);
    const animatronicTitleWrapper1 = makeElement('div', 'title-wrapper', animatronicWrapper1);
    const freddyHeader = makeElement('h2', null, animatronicTitleWrapper1, 'Freddy');
    const freddyImgWrapper = makeElement('div', 'fnaf-img', animatronicTitleWrapper1);
    const freddyImg = makeElement('img', null, freddyImgWrapper, null, 'src', fnafFreddy);
    const freddyInfo = makeElement('p', 'about-animatronic', animatronicWrapper1, texts.aboutAnimatronicText);

    const animatronicWrapper2 = makeElement('div', 'animatronic-wrapper', animatronicSection);
    const bonnieInfo = makeElement('p', 'about-animatronic', animatronicWrapper2, texts.aboutAnimatronicText);
    const animatronicTitleWrapper2 = makeElement('div', 'title-wrapper', animatronicWrapper2);
    const bonnieHeader = makeElement('h2', null, animatronicTitleWrapper2, 'Bonnie');
    const bonnieImgWrapper = makeElement('div', 'fnaf-img', animatronicTitleWrapper2);
    const bonnieImg = makeElement('img', null, bonnieImgWrapper, null, 'src', fnafBonnie);

    const animatronicWrapper3 = makeElement('div', 'animatronic-wrapper', animatronicSection);
    const animatronicTitleWrapper3 = makeElement('div', 'title-wrapper', animatronicWrapper3);
    const chicaHeader = makeElement('h2', null, animatronicTitleWrapper3, 'Chica');
    const chicaImgWrapper = makeElement('div', 'fnaf-img', animatronicTitleWrapper3);
    const chicaImg = makeElement('img', null, chicaImgWrapper, null, 'src', fnafChica);
    const chicaInfo = makeElement('p', 'about-animatronic', animatronicWrapper3, texts.aboutAnimatronicText);

    const animatronicWrapper4 = makeElement('div', 'animatronic-wrapper', animatronicSection);
    const foxyInfo = makeElement('p', 'about-animatronic', animatronicWrapper4, texts.aboutAnimatronicText);
    const animatronicTitleWrapper4 = makeElement('div', 'title-wrapper', animatronicWrapper4);
    const foxyHeader = makeElement('h2', null, animatronicTitleWrapper4, 'Foxy');
    const foxyImgWrapper = makeElement('div', 'fnaf-img', animatronicTitleWrapper4);
    const foxyImg = makeElement('img', null, foxyImgWrapper, null, 'src', fnafFoxy);

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');

    const copyRigthsWrapper = makeElement('div', 'copy-rights', footer);
    const copyRigths = makeElement('p', null, copyRigthsWrapper, 'Copy-rigths by Ricardo Pico');
    const createroScottC = makeElement('p', null, copyRigthsWrapper, 'All Fanf characters are property of Scott Cawthon');


    return footer;
}

const loadHomePage = () => {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';
    
        contentContainer.appendChild(createHeader());
        contentContainer.appendChild(createMain());
        contentContainer.appendChild(createFooter());

        setupNavigation();
    }


export  { loadHomePage, createHeader, createFooter };

