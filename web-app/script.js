let loginBtn = document.querySelector('#log-in');
let form = document.querySelector('#login-form');
let overlay = document.querySelector('#blur');

loginBtn.addEventListener('click', e =>{
    e.preventDefault;
    form.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
})

overlay.addEventListener('click', e => {
    form.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
})