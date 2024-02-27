

// TABS CATEGORIES

let subcategoryTab = document.querySelectorAll('.subcategory__tab');
let categoryPostsItem = document.querySelectorAll('.category-posts__item');


for (let i = 0; i < subcategoryTab.length; i++) {
  subcategoryTab[i].addEventListener("click", function() {
    let id = this.getAttribute('data-tab');
    for (let j = 0; j < categoryPostsItem.length; j++) {
      let content = categoryPostsItem[j].dataset.tab;
      if (id != content && id != "all") {
        categoryPostsItem[j].style.display = "none"
      } else if (id == "all") {
        categoryPostsItem[j].style.display = "block"
      } else {
        categoryPostsItem[j].style.display = "block"
      }
      
    }
  });
}





// МОБИЛЬНОЕ МЕНЮ

let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");


burger.onclick = function() {
  menu.classList.toggle("menu--open");
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


let lastScrollTop = 0;
let header = document.querySelector(".header");
let showHideHeader = function() {
  let scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    header.style.top = "-80px";
  } else {
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
};
window.addEventListener("scroll", throttle(showHideHeader, 300));


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



// BANNER-SLIDER


let banSlControlRight = document.querySelector(".banner-slider__control-right");
let banSlControlLeft = document.querySelector(".banner-slider__control-left");
let bannerSlides = document.querySelectorAll(".banner-slider__item");
let currentSlide = 0;


banSlControlRight.addEventListener("click", function() {
  bannerSlides[currentSlide].classList.remove("screen-active");
  currentSlide = (currentSlide+1)%bannerSlides.length;
  bannerSlides[currentSlide].classList.add("screen-active");
});

banSlControlLeft.addEventListener("click", function() {
  bannerSlides[currentSlide].classList.remove("screen-active");
  if (currentSlide != 0) {
    currentSlide = (currentSlide-1)%bannerSlides.length;
  } else {
    currentSlide = bannerSlides.length - 1;
  }
  bannerSlides[currentSlide].classList.add("screen-active");
});


// SLIDER LAST POSTS

let postsList = document.querySelector(".last-posts__list");
let postItems = document.querySelectorAll(".last-posts__item");
let postsButtonRight = document.querySelector(".last-posts__button--right");
let postsButtonLeft = document.querySelector(".last-posts__button--left");

postsButtonRight.addEventListener("click", function() {
  let scrollLeft = postItems[0].clientWidth
  postsList.scrollLeft += scrollLeft
})

postsButtonLeft.addEventListener("click", function() {
  let scrollLeft = postItems[0].clientWidth
  postsList.scrollLeft -= scrollLeft
});




