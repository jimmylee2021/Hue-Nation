let header = document.querySelector('header')
window.addEventListener('scroll', ()=> {
    header.classList.toggle('sticky',window.scrollY > 0)
})


let menu = document.querySelector('.nav')
let navbar = document.querySelector('#menu-bar')

navbar.addEventListener('click', ()=> {
    menu.classList.toggle('active')
    navbar.classList.toggle('fa-times')
})