function burger() {
  let burgerBtn = document.querySelector('.navbar__btn')
  let burgerBtnCheckbox = document.querySelector('.navbar__cb');
  let burgerNavbar = document.querySelector('.burger-navbar');
  let navbar = document.querySelector('.navbar');

  burgerBtnCheckbox.addEventListener('click', () => {
    burgerNavbar.classList.toggle('burger-navbar_active');
    burgerBtn.classList.toggle('navbar__btn_active');
    navbar.classList.toggle('navbar_active');
  })

}

export default burger;