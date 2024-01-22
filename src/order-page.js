import { createHeader, createFooter } from "./home-page";
import { setupNavigation } from "./website";

function createOrder() {
    const main = document.createElement('main');

}


const loadOrderPage = () => {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';

    contentContainer.appendChild(createHeader());
    contentContainer.appendChild(createOrder());
    contentContainer.appendChild(createFooter());

    setupNavigation();
}

export default loadOrderPage;