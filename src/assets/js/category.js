import $ from 'jquery'
import {Swiper} from 'swiper'

$(".cmitem__list-menu .fa-angle-down").on("click", function(){
    $(".cmitem__list-submenu").slideDown();
    $(this).hide();
    $(this).next().show();
})
$(".cmitem__list-menu .fa-angle-up").on("click", function(){
    $(".cmitem__list-submenu").slideUp();
    $(this).hide();
    $(this).prev().show();
})

$(".category__menu-item .fa-sort-down").on("click", function(){
    $(this).parent().parent().siblings().children(".cmitem__list").slideUp();
    //$(".cmitem__list").slideUp();
    $(this).parent().next().slideToggle();
})

$(".category-icon .fa-align-right").on("click", function(){
    $(this).parent().css("right", "256px");
    $(".category__menu").css("right", "0px");
    $(this).hide();
    $(this).next().show();
})
$(".category-icon .fa-times").on("click", function(){
    $(this).parent().css("right", "0px");
    $(".category__menu").css("right", "-256px");
    $(this).hide();
    $(this).prev().show();
})

new Swiper(".swiper-category-1", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: " .next-big-1",
      prevEl: ".prev-big-1",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  new Swiper(".swiper__product-1", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".next-small-1",
      prevEl: ".prev-small-1",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });