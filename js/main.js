// hamburger menu
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav")

burger.addEventListener("click", function() {
  burger.classList.toggle("header__burger--opened");
  nav.classList.toggle("header__nav--opened");
})

const faqsButton = document.querySelectorAll(".faqs__button");
const faqsDesc = document.querySelector(".faqs__description");

const faqs = faqsButton.forEach( (button) => {
  button.addEventListener("click", function(evt){
    button.classList.toggle("faqs__button--opened");
    faqsDesc.classList.toggle("faqs__description--opened");
  })
})