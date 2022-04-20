import React, { useEffect } from "react";
import $ from "jquery";

const ScrollToTop = () => {
  useEffect(() => {
    window.addEventListener("wheel", function () {
      if (window.scrollY > 250) {
        $(".scroll-to-top").css("display", "block");
      } else {
        $(".scroll-to-top").css("display", "none");
      }
    });
    $(".scroll-to-top").click(function () {
      // $("html, body").animate({ scrollTop: 0 }, "slow");
      window.scrollTo(0, 0);
      $(".scroll-to-top").css("display", "none");
    });
  });

  return (
    <div className="scroll-to-top animate__animated animate__fadeInDown">
      <i className="fas fa-angle-up"></i>
    </div>
  );
};

export default ScrollToTop;
