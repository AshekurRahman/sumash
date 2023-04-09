(function ($) {
  $(document).on("ready", function () {

    $(".sm-select-option").each(function () {
      var this_option = $(this);
      var selected = $(this).find(".selected-option");
      var dropdown = $(this).find(".sm-select");
      $(this)
        .click(function () {
          dropdown.fadeToggle();
        })
        .mouseleave(function () {
          dropdown.fadeOut();
        });

      $(this)
        .find(".sm-select li a")
        .on("click", function () {
          var value = $(this).text(); // Use .text() instead of .value()
          this_option.find(".selected-option").text(value);
          this_option.find(".sm-select li a").removeClass("active");
          $(this).addClass("active");
          dropdown.fadeOut();
          return false;
        });
    });


    $('.header-navbar .nav-list li .sub-menu').parent('li').children('a').append('<span class="arrow icon-9"></span>');



  });
})(jQuery);
