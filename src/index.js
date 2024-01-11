import './styles/style.css'
import headerLogo from './assets/pizzaria.png';
import williamAftonImg from './assets/WilliamAfton.png'
import fanfIcon from './assets/FNAF-bg.png'

const logoContainer = document.querySelector('.logo')
const ownerImg = document.querySelector('.owner-img')
const aboutUsImg = document.querySelector('.about-us-img')

const pizzariaLogo = new Image();
const ownerWilliamA = new Image();
const fanfImg = new Image(); 



pizzariaLogo.src = headerLogo;
ownerWilliamA.src = williamAftonImg;
fanfImg.src = fanfIcon;

logoContainer.appendChild(pizzariaLogo);
ownerImg.appendChild(ownerWilliamA);
aboutUsImg.appendChild(fanfImg)


