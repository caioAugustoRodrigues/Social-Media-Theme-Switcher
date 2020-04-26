const themeSwitch = document.getElementById('theme-switch');
const toggler = document.getElementById('toggler');
const body = document.body;
let light = true;

function getTheme() {
    if (!light) {
        light = true;
        toggler.classList.remove('on');
        body.setAttribute('id', 'light');
    } else {
        light = false;
        toggler.classList.add('on');
        body.setAttribute('id', 'dark');
    }
}

themeSwitch.addEventListener('click', getTheme);
