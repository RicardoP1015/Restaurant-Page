import { loadHomePage } from "./home-page";


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

const setupNavigation = () => {
    document.getElementById('homeBtn').addEventListener('click', loadHomePage);
    document.getElementById('menuBtn').addEventListener('click', loadMenuPage);
    document.getElementById('orderBtn').addEventListener('click', loadOrderPage);
    document.getElementById('contactBtn').addEventListener('click', loadContactPage);
};

const initWebSite = () => {
    loadHomePage();
    
}

export  { makeElement, initWebSite };

