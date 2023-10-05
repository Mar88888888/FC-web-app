'use strict'
let infoSpan = document.querySelector('#information-span');
let menuLabContainer = document.querySelector('#menu-lab-container');
let labChoiseSection = document.querySelector('#lab-btn-section')

labChoiseSection.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('lab-btn')){
        let btn = e.target;
        let labNumber = btn.closest('a').getAttribute('lab');
        [...infoSpan.children].forEach(child => {
            child.classList.add('hidden');
        });
        [...menuLabContainer.children].forEach(child => {
            child.classList.add('hidden');
        });

        infoSpan.querySelector(`#content-lab${labNumber}`).classList.toggle('hidden');
        menuLabContainer.querySelector(`#menu-lab${labNumber}`).classList.toggle('hidden');
    }
});

menuLabContainer.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('menu-btn')){
        let btn = e.target;
        let labNumber = btn.closest('ul').getAttribute('lab');
        infoSpan.querySelector(`#content-lab${labNumber} .${btn.classList[0]}`).classList.toggle('hidden');
    }
});
