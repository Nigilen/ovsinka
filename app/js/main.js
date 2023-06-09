// МОБИЛЬНОЕ МЕНЮ

let burger = document.querySelector(".burger");
let menu = document.querySelector(".site-nav");


burger.onclick = function() {
  menu.classList.toggle("site-nav__wrapper--open");
  burger.classList.toggle("burger--active");
};

// ЗАКРЫТИЕ ВИДЖЕТА ПОЛИТИКИ

// let policyWidget = document.querySelector(".policy-widget");
// let policyButton = document.querySelector(".policy-widget__button");

// policyButton.onclick = function() {
//   policyWidget.style.display = "none";
// };


// THROTTLE ФУНКЦИЯ

function throttle(callee, timeout) {
  let timer = null
  return function perform(...args) {
    if (timer) return
    timer = setTimeout(() => {
      callee(...args)
      clearTimeout(timer)
      timer = null
    }, timeout)
  }
};

// HEADER-STICKY 

let header = document.querySelector(".header");
let oldScroll = window.scrollY;
let newScroll;

let scrolling = function() {
  newScroll = window.scrollY;
  const headerHidden = header.classList.contains('header_hidden');

  if (newScroll > oldScroll && !headerHidden) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  } 

  oldScroll = newScroll;
};

window.addEventListener("scroll", throttle(scrolling, 300));


// UP-BUTTON

let upButton = document.querySelector(".up-button")

upButton.addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: 'smooth'})
})

window.addEventListener("scroll", function() {
  if (window.scrollY > 1000) {
    upButton.classList.remove("visually-hidden")
  } else {
    upButton.classList.add("visually-hidden")
  }
})