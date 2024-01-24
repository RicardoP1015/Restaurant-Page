import { loadHomePage } from "./home-page";
import loadMenuPage from "./menu-page";
import loadOrderPage from "./order-page";
import loadContactPage from "./contact-page";

const makeElement = (elem, cl, parent, text, attributeName, attributeValue) => {
    const dom = document.createElement(elem);
    
    if (cl) {
        dom.classList.add(cl);
    }

    if (text) {
        dom.textContent = text;
    }

    if (attributeName && attributeValue) {
        dom.setAttribute(attributeName, attributeValue);
    }

    if (parent && parent.appendChild) {
        parent.appendChild(dom);
    } else {
        console.error('Invalid parent element provided.');
    }

    return dom;
};

function setupNavigation() {
    const homeButton = document.getElementById('homeBtn');
    if (homeButton) {
        homeButton.addEventListener('click', loadHomePage);
    }

    const menuButton = document.getElementById('menuBtn');
    if (menuButton) {
        menuButton.addEventListener('click', loadMenuPage);
}

    const orderButton = document.getElementById('orderBtn');
    if (orderButton) {
        orderButton.addEventListener('click', loadOrderPage)
    }

    const contactButton = document.getElementById('contactBtn');
    if (contactButton) {
        contactButton.addEventListener('click', loadContactPage);
    }
}


export  { makeElement, setupNavigation };


