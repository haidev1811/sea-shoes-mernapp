import $ from 'jquery'
import {Swiper} from 'swiper'

$("#zoom-1").elevateZoom({
    scrollZoom: true,
  });
  new Swiper(".swiper-thumb", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
  },
  });
$(".tab__head-1").on("click", function(){
  $(this).siblings().removeClass("tab__head-select");
  $(this).addClass("tab__head-select");
  $(".tab__content-1").show();
  $(".tab__content-2").hide();
  $(".tab__content-3").hide();
})
$(".tab__head-2").on("click", function(){
  $(this).siblings().removeClass("tab__head-select");
  $(this).addClass("tab__head-select");
  $(".tab__content-2").show();
  $(".tab__content-1").hide();
  $(".tab__content-3").hide();
})
$(".tab__head-3").on("click", function(){

  $(this).siblings().removeClass("tab__head-select");
  $(this).addClass("tab__head-select");
  $(".tab__content-3").show();
  $(".tab__content-2").hide();
  $(".tab__content-1").hide();
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
new Swiper(".swiper__product-2", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".next-small-2",
    prevEl: ".prev-small-2",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
new Swiper(".swiper__product-3", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".next-small-3",
    prevEl: ".prev-small-3",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
new Swiper(".swiper__product-4", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".next-small-4",
    prevEl: ".prev-small-4",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

$(".detail__img-thumb img").on("click", function () { 
  $(".detail__img-main img").attr("src", $(this).attr("src"));
 })

 lc_lightbox('.elem', {
  wrap_class: 'lcl_fade_oc',
  gallery: true,
  thumb_attr: 'data-lcl-thumb',

  skin: 'minimal',
  radius: 0,
  padding: 0,
  border_w: 0,
});