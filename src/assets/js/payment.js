import $ from 'jquery'

$(".total-link").on("click", function () {
    $(".payment__order-list").slideToggle();
    if ($(this).children(".la-angle-up").css("display") == "none") {
      $(this).children(".la-angle-down").css("display", "none");
      $(this).children(".la-angle-up").css("display", "inline");
    } else {
      $(this).children(".la-angle-down").css("display", "inline");
      $(this).children(".la-angle-up").css("display", "none");
    }
  });
  