const themeSwitch = document.getElementById('theme-switch');
const toggler = document.getElementById('toggler');
const body = document.body;
let light = true;

function getTheme() {
    if (!light) {
        light = true;
        toggler.classList.remove('on');
        body.classList.remove('dark');
    } else {
        light = false;
        toggler.classList.add('on');
        body.classList.add('dark');
    }
}

themeSwitch.addEventListener('click', getTheme);