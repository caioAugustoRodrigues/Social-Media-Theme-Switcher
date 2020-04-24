const nav = document.getElementById('nav');
const navTrigger = document.getElementById('nav-toggle');
let isOpen = false;

function getNav() {
    if (!isOpen) {
        nav.classList.add('open');
        console.log('open')
        isOpen = true;
    } else {
        nav.classList.remove('open');
        console.log('close')
        isOpen = false;
    }
}

navTrigger.addEventListener('click', getNav);