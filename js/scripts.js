// БУРГЕР МЕНЮ

const burger = document.querySelector('#burger'),
    menu = document.querySelector('#menu')

const toggleMenu = () => { // функция для открытия и закрытия меню
    burger.classList.toggle('active')
    menu.classList.toggle('active')
}

burger.addEventListener('click', toggleMenu)


// Error
const searchBtn = document.querySelector('#search')

searchBtn.addEventListener('click', () => { alert("We are sorry but the tracking number is invalid, please try again") })