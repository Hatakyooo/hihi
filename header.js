let icon = document.querySelector('.icon');
let input = document.querySelector('.js-txtSearchKey');
let search = document.querySelector('.search');

let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');

icon.addEventListener('click', function() {
    search.classList.toggle('active')
})

toggle.addEventListener('click', function() {
    nav.classList.toggle('open')
})