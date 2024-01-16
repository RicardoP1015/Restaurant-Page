import pizzaria from './assets/pizzaria.png';
import fnafBg from './assets/FNAF-bg.png';
import williamAfton from './assets/WilliamAfton.png';
import fnafFreddy from './assets/freddyFNAF.png'
import fnafBonnie from './assets/bonnieFNAF.png'
import fnafChica from './assets/chicaFNAF.png';
import fnafFoxy from './assets/foxyFNAF.png';
import makeElement from './website';

const aboutUSText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, magni consectetur! Enim laborum et
ab? Voluptatem expedita mollitia impedit neque quam vitae, ea quasi culpa dolores, hic, reiciendis
possimus voluptatum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ducimus, excepturi
culpa sit optio, animi velit ea non, delectus nisi laboriosam illum incidunt inventore. Quisquam
facilis voluptatum ad dolore illo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
Repellendus, iusto culpa voluptatum porro minima commodi quasi labore inventore molestiae veniam
rerum cupiditate, beatae molestias animi tempora. Aperiam, dolor! Error, explicabo!`;

const aboutOwnerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi reprehenderit vitae nobis
voluptatibus laudantium odit non blanditiis doloribus velit qui inventore aperiam, ad dolorum
eos iure dolorem quo quam eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
molestiae aperiam laboriosam veniam optio labore cumque consectetur a sapiente? Consequuntur
sunt ut odio quisquam, voluptatem quas exercitationem sint ea eius.`;

const aboutAnimatronicText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam! Nesciunt omnis mollitia
veniam eum eveniet maiores sit sunt dolorum quos incidunt inventore magni veritatis, ut
voluptatum voluptatem ad eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
quae dolore quas libero? Veniam quibusdam non repudiandae officia. Pariatur voluptatem
praesentium quidem assumenda minus corporis accusamus inventore libero atque rem.`;

function createHeader() {
    const header = document.createElement('header');

    const logoDiv = makeElement('div', 'logo', header)
    const logoImage = makeElement('img', null, logoDiv, null, 'src', pizzaria);
    const navBar = makeElement('nav', 'nav-bar', header);
    const navList = makeElement('ul', 'nav-list', navBar);
    const menuItems = ['Menu', 'Order', 'Contact'];

    menuItems.forEach(itemText => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        listItem.textContent = itemText;
        navList.appendChild(listItem);
    });

    return header;
}

function createMain() {
    const main = document.createElement('main');

    const aboutUsContainer = makeElement('div', 'about-us-container', main);
    const aboutUsImgWrapper = makeElement('div', 'about-us-img', aboutUsContainer);
    const aboutUsImg = makeElement('img', null, aboutUsImgWrapper, null, 'src', fnafBg);
    const aboutUsP = makeElement('p', 'about-us', aboutUsContainer, aboutUSText);

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
    const aboutOwnerP = makeElement('p', 'about-owner', aboutOwnerWrapper, aboutOwnerText);

    const animatronicSection = makeElement('div', 'animatronic-section' , main);
    const animatronicSectionHeader = makeElement('h2', null, animatronicSection, 'Amazing Creations');

    const animatronicWrapper1 = makeElement('div', 'animatronic-wrapper', animatronicSection);
    const animatronicTitleWrapper1 = makeElement('div', 'title-wrapper', animatronicWrapper1);
    const freddyHeader = makeElement('h2', null, animatronicTitleWrapper1, 'Freddy');
    const freddyImgWrapper = makeElement('div', 'fnaf-img', animatronicTitleWrapper1);
    const freddyImg = makeElement('img', null, freddyImgWrapper, null, 'src', fnafFreddy);
    const freddyInfo = makeElement('p', 'about-animatronic', animatronicWrapper1, aboutAnimatronicText);

    const animatronicWrapper2 = makeElement('div', 'animatronic-wrapper', animatronicSection);
    const bonnieInfo = makeElement('p', 'about-animatronic', animatronicWrapper2, aboutAnimatronicText);
    const animatronicTitleWrapper2 = makeElement('div', 'title-wrapper', animatronicWrapper2);
    const bonnieHeader = makeElement('h2', null, animatronicTitleWrapper2, 'Bonnie');
    const bonnieImgWrapper = makeElement('div', 'fnaf-img', animatronicTitleWrapper2);
    const bonnieImg = makeElement('img', null, bonnieImgWrapper, null, 'src', fnafBonnie);

    const animatronicWrapper3 = makeElement('div', 'animatronic-wrapper', animatronicSection);
    const animatronicTitleWrapper3 = makeElement('div', 'title-wrapper', animatronicWrapper3);
    const chicaHeader = makeElement('h2', null, animatronicTitleWrapper3, 'Chica');
    const chicaImgWrapper = makeElement('div', 'fnaf-img', animatronicTitleWrapper3);
    const chicaImg = makeElement('img', null, chicaImgWrapper, null, 'src', fnafChica);
    const chicaInfo = makeElement('p', 'about-animatronic', animatronicWrapper3, aboutAnimatronicText);

    const animatronicWrapper4 = makeElement('div', 'animatronic-wrapper', animatronicSection);
    const foxyInfo = makeElement('p', 'about-animatronic', animatronicWrapper4, aboutAnimatronicText);
    const animatronicTitleWrapper4 = makeElement('div', 'title-wrapper', animatronicWrapper4);
    const foxyHeader = makeElement('h2', null, animatronicTitleWrapper4, 'Foxy');
    const foxyImgWrapper = makeElement('div', 'fnaf-img', animatronicTitleWrapper4);
    const foxyImg = makeElement('img', null, foxyImgWrapper, null, 'src', fnafFoxy);

    return main
}

function createFooter() {
    const footer = document.createElement('footer');

    const copyRigthsWrapper = makeElement('div', 'copy-rights', footer);
    const copyRigths = makeElement('p', null, copyRigthsWrapper, 'Copy-rigths by Ricardo Pico');
    const createroScottC = makeElement('p', null, copyRigthsWrapper, 'All Fanf characters are property of Scott Cawthon');


    return footer;
}

export { createHeader, createMain, createFooter };

