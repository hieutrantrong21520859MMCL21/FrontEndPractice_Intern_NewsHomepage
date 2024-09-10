const btnOpenMenu = document.getElementById('menu');
const btnCloseMenu = document.getElementById('close');
const menu = document.querySelector('main > header dialog');

console.log(menu);

btnOpenMenu.addEventListener('click', () => {

    menu.showModal();
})

btnCloseMenu.addEventListener('click', () => {

    menu.close();
})