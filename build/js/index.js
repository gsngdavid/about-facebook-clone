function footerDropdwonHandler(event) {
    let dropdown = event.target.closest('.footer-dropdown').lastElementChild;
    dropdown.classList.toggle('h-0');
}

let footerDropdowns = document.querySelectorAll('.footer-dropdown');

for (let i = 0; i < footerDropdowns.length; i++) {
    footerDropdowns[i].addEventListener('click', footerDropdwonHandler);
}
