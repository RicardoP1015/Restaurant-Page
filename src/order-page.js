import { createHeader, createFooter } from "./home-page";
import { makeElement, setupNavigation } from "./website";
import foxyImage from './assets/foxyFNAF.png'
import bonnieImage from './assets/bonnieFNAF.png'

function createOrder() {
    const main = document.createElement('main');

    const orderSection = makeElement('div', 'order', main);
    const orderWrapper = makeElement('div', 'order-wrapper', orderSection)

    const foxyWrapper = makeElement('div', 'foxy-wrapper', orderWrapper)
    const foxyHeader = makeElement('h3', 'order-header', foxyWrapper, 'What Ya Hunger For!?')
    const foxyImgWrapper = makeElement('div', 'foxy-img', foxyWrapper)
    const foxyImg = makeElement('img', null, foxyImgWrapper, null, 'src', foxyImage)

    const orderForm = makeElement('form', 'order-form', orderWrapper, null, 'onsubmit', 'return false')
    const orderHeader = makeElement('h2', null, orderForm, 'Order Info')
    const nameLabel = makeElement('label', null, orderForm, 'Order Name', 'for', 'name')
    const nameInput = makeElement('input', 'order-inputs', orderForm, null, 'type', 'text')
    nameInput.id = 'name'
    nameInput.name = 'name'
    const contactLabel = makeElement('label', null, orderForm, 'Phone Number', 'for', 'contact-number')
    const contactInput = makeElement('input', 'order-inputs', orderForm, null, 'type', 'tel')
    contactInput.pattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}'
    contactInput.id = 'contact-number'
    contactInput.name = 'contact-number'
    const foodLabel = makeElement('label', null, orderForm, 'What Will You Have', 'for', 'food-item')
    const foodSelect = makeElement('select', 'order-inputs', orderForm, null, 'name', 'food-item')
    foodSelect.id = 'food-item'
    const selectOptionNull = makeElement('option', null, foodSelect, null, 'hidden')
    const selectOptionBurger = makeElement('option', null, foodSelect, 'Freddy Burger Meal', 'value', 'burger')
    const selectOptionPizza = makeElement('option', null, foodSelect, 'Fnaf Pizza Pie', 'value', 'pizza')
    const selectOptionPasta = makeElement('option', null, foodSelect, 'Chica And Bonnie Pasta Meal', 'value', 'pasta')
    const selectOptionFries = makeElement('option', null, foodSelect, 'Foxy Fries Meal', 'value', 'fries')
    const submitOrderBtn = makeElement('button', 'sub-btn', orderForm, 'Submit Order')

    const bonnieWrapper = makeElement('div', 'bonnie-wrapper', orderWrapper)
    const bonnieHeader = makeElement('h3', 'order-header', bonnieWrapper, 'EveryThing looks Good to me!!')
    const bonnieImgWrapper = makeElement('div', 'bonnie-img', bonnieWrapper)
    const bonnieImg = makeElement('img', null, bonnieImgWrapper, null, 'src', bonnieImage)

    return main;
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