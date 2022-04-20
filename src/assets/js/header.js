import $ from 'jquery'

$(".clitem__infor-number .num-decrease").on("click", function () {
    console.log(1);
    const numInput = $(this).next();
    console.log(numInput);
    let num = parseInt(numInput.val());
    if (num <= 1) return;
    else {
      num--;
      numInput.val(num);
    }
  });
  $(".clitem__infor-number .num-increase").on("click", function () {
    const numInput = $(this).prev();
    let num = parseInt(numInput.val());
    num++;
    numInput.val(num);
  });
  $(".nlmenu__item .fa-plus").on("click", function(){
      $(this).parent().next().slideDown();
      $(this).hide();
      $(this).next().show();
  })
  $(".nlmenu__item .fa-minus").on("click", function(){
    $(this).parent().next().slideUp();
    $(this).hide();
    $(this).prev().show();
})
$(".menu .wrap").on("click",function(){
    $(".navbars").css("left", "-280px");
    $(".menu").css("visibility", "hidden");
    $(".swiper-pagination").css("z-index", "10");
})
$(".header__icon i").on("click",function(){
    $(".navbars").css("left", "0");
    $(".swiper-pagination").css("z-index", 0);
    $(".menu").css("visibility", "visible");
})

$(".footer__mid .fa-plus").on("click", function(){
  $(this).parent().next().slideDown();
  $(this).hide();
  $(this).next().show();
})

$(".footer__mid .fa-minus").on("click", function(){
  $(this).parent().next().slideUp();
  $(this).hide();
  $(this).prev().show();
})

window.addEventListener("wheel", function () {
  if (window.scrollY > 250) {
    $(".scroll-to-top").css("display", "block");
  } else {
    $(".scroll-to-top").css("display", "none");
  }
});
$(".scroll-to-top").click(function () {
  //$("html, body").animate({ scrollTop: 0 }, "slow");
  window.scrollTo(0, 0);
  $(".scroll-to-top").css("display", "none");
});