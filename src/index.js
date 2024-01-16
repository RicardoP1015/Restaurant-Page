import './styles/style.css';
import createHeader from './home-page';




const initHomePage = () => {
const contentContainer = document.getElementById('content');

    contentContainer.appendChild(createHeader());

}

initHomePage();











