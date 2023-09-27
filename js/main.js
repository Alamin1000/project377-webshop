(function ($) {
  "use strict";

  // popper
  // {
  //   const button = document.querySelector("#button");
  //   const tooltip = document.querySelector("#tooltip");

  //   // Pass the button, the tooltip, and some options, and Popper will do the
  //   // magic positioning for you:
  //   Popper.createPopper(button, tooltip, {
  //     placement: "right",
  //   });
  // }
})(jQuery);

$(document).ready(function () {
  // nice-select
  $(".nice-select").niceSelect();

  // custom-nice-input
  $(".nice-input")
    .siblings(".minus-button")
    .click(function () {
      if (
        $(this).siblings(".nice-input").attr("value") >
        $(this).siblings(".nice-input").attr("min") * 1
      ) {
        $(this)
          .siblings(".nice-input")
          .attr("value", $(this).siblings(".nice-input").attr("value") - 1);
      }
    });
  $(".nice-input")
    .siblings(".plus-button")
    .click(function () {
      if (
        $(this).siblings(".nice-input").attr("value") <
        $(this).siblings(".nice-input").attr("max") * 1
      ) {
        $(this)
          .siblings(".nice-input")
          .attr("value", $(this).siblings(".nice-input").attr("value") - -1);
      }
    });
});
