import './styles/style.css';
import { createHeader, createMain, createFooter } from './home-page';




const initHomePage = () => {
const contentContainer = document.getElementById('content');

    contentContainer.appendChild(createHeader());
    contentContainer.appendChild(createMain());
    contentContainer.appendChild(createFooter());

}

initHomePage();



