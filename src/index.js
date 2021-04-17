import './styles.css';
import { onPageReboot, themeSwitchCheckboxRef, onThemeChange } from './js/theme-switch';
import menuItemTpl from './templates/menu-item.hbs';
import menuItems from './menu.json'


onPageReboot();

themeSwitchCheckboxRef.addEventListener('change', onThemeChange);


const menuContainer = document.querySelector('.js-menu');
const menuItemsMarkup = createMenuItemsMarkup(menuItems);

menuContainer.insertAdjacentHTML("beforeend", menuItemsMarkup)

function createMenuItemsMarkup(menuItems) {
    return menuItems.map(menuItemTpl).join('');
}
