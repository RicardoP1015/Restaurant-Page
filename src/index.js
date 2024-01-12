import './styles/style.css';
import headerLogo from './assets/pizzaria.png';
import williamAftonImg from './assets/WilliamAfton.png';
import fnafIcon from './assets/FNAF-bg.png';
import fnafFreddy from './assets/freddyFNAF.png';
import fnafBonnie from './assets/bonnieFNAF.png';
import fnafChica from './assets/chicaFNAF.png';
import fnafFoxy from './assets/foxyFNAF.png';

const headerContainer = document.querySelector('.logo')
const ownerImg = document.querySelector('.owner-img')
const aboutUsImg = document.querySelector('.about-us-img')
const freddyImg = document.querySelector('.freddy')
const bonnieImg = document.querySelector('.bonnie')
const chicaImg = document.querySelector('.chica')
const foxyImg = document.querySelector('.foxy')




const CreateImage = (img,wrapper) => {
    const imgNew = new Image();
    imgNew.src = img;
    return wrapper.appendChild(imgNew);
}

const mainLogo = CreateImage(headerLogo, headerContainer);
const ownerImage = CreateImage(williamAftonImg, ownerImg);
const fnafBanner = CreateImage(fnafIcon, aboutUsImg);
const freddyImage = CreateImage(fnafFreddy, freddyImg);
const bonnieImage = CreateImage(fnafBonnie, bonnieImg);
const chicaImage = CreateImage(fnafChica, chicaImg);
const foxyImage = CreateImage(fnafFoxy, foxyImg);





