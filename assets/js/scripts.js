(function ($) {
  $(document).on("ready", function () {

    
    var navOffset = $('.main-navbar').offset().top;

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();

        if (scrollPos >= navOffset){
            $('.main-navbar').addClass('sticky');
        } else {
            $('.main-navbar').removeClass('sticky');
        }
    });

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

    $('.main-navbar .nav-list li:has(.sub-menu)').find('> a').append('<span class="arrow icon-9"></span>');

    $('.serach-toggle').on('click', function(){
      $('.header-search').slideToggle();
      return false;
    });

    var $navbar = $('.navbar');
    var $navList = $('.nav-list');    
    // Clone the nav list and add the new class
    var $mobileMenu = $navList.clone().addClass('mobile-menu');  
    // Append the mobile menu to the navbar
    $navbar.append($mobileMenu);

    $('.main-navbar .nav-list.mobile-menu li a .arrow').on('click', function() {
      $(this).toggleClass('active');
      $(this).parent().siblings('.sub-menu').slideToggle();
      return false;
    });


    $('.action-1.menu-toggle').on('click', function(){
      $('.main-navbar').slideToggle();
      return false;
    });


    // clone the action-2 element
    var $action2 = $('.header-actions .action-2').clone();
    // create a new div and add the cloned action-2 element to it
    var $menusActions = $('<div>').addClass('menu-actions').append($action2);
    // append the new div to the navbar
    $('.navbar').append($menusActions);

  });
})(jQuery);
