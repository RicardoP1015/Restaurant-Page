import './styles/style.css'
import logo from './assets/pizzaria.png';

const container = document.querySelector('.logo')

const pizzariaLogo = new Image();



pizzariaLogo.src = logo;

container.appendChild(pizzariaLogo);

