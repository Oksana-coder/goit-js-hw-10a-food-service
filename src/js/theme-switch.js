const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export const themeSwitchCheckboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

// themeSwitchCheckboxRef.addEventListener('change', onThemeChange);

export function onThemeChange() {
    bodyRef.classList.toggle(Theme.DARK);

    if (bodyRef.classList.contains(Theme.DARK)) {
        bodyRef.classList.remove(Theme.LIGHT);
    } else {
        bodyRef.classList.add(Theme.LIGHT);
    }
    localStorage.setItem('theme', bodyRef.classList.value);
}

export function onPageReboot() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === Theme.DARK) {
        themeSwitchCheckboxRef.checked = true;
        bodyRef.classList.add(Theme.DARK);
    }
}