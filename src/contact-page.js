import { createHeader, createFooter } from "./home-page";
import { makeElement, setupNavigation } from "./website";
import fnafFreddy from './assets/freddyFNAF.png';
import fnafRestaurant from './assets/fnafRestaurant.png';

function createContact() {
    const main = document.createElement('main')

    const contactSection = makeElement('div', 'contact-section', main)
    const freddyWrapper = makeElement('div', 'freddy-wrapper', contactSection)
    const freddyHeader = makeElement('h3', 'contact-headers', freddyWrapper, 'HeHehehe')
    const freddyImgWrapper = makeElement('div', 'freddy-img', freddyWrapper)
    const freddyImg = makeElement('img', null, freddyImgWrapper, null, 'src', fnafFreddy)

    const contactWrapper = makeElement('div', 'contact-wrapper', contactSection)
    const contactNumber = makeElement('h2', 'contact-headers', contactWrapper, 'Call Us Any Time @ 999-999-9999')
    const contactLocation = makeElement('h2', 'contact-headers', contactWrapper, 'Come Find Us Or Will Find You')
    const contactImgWrapper = makeElement('div', 'loc-img', contactWrapper)
    const contactImg = makeElement('img', null, contactImgWrapper, null, 'src', fnafRestaurant)

    return main
}

const loadContactPage = () => {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';

    contentContainer.appendChild(createHeader());
    contentContainer.appendChild(createContact());
    contentContainer.appendChild(createFooter());

    setupNavigation();
}

export default loadContactPage;