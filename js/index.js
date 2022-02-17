const menuHamburger = document.querySelector('#menu-hambuger');
const navBar = document.querySelector('.nav-item');
const items = document.querySelectorAll('.item');


menuHamburger.addEventListener('click', () => {
  menuHamburger.src = './img/closex.svg'
  if(navBar.classList.contains('active')) {
    navBar.classList.remove('active');
    navBar.classList.remove('animation');
    navBar.classList.remove('nav');
    menuHamburger.src = './img/hamburguer.svg'
  }else {
    navBar.classList.add('active');
    navBar.classList.add('animation');
  }
})

for(const button of items) {
  button.addEventListener('click', () => {
      navBar.classList.remove('active');
      menuHamburger.src = './img/hamburguer.svg'
  })
}