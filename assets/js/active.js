(function ($) {
  $(document).on("ready", function () {
    $("img").addClass("lazy");
    $(".lazy").Lazy();

    /*====== Intro-Slider-Active ======*/
    var Intro_slider = new Swiper(".intro-slider", {
      loop: true,
      speed: 600,
      spaceBetween: 0,
      parallax: true,
      slidesPerView: 1,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      pagination: {
        el: ".intro-slider .swiper-pagination",
        clickable: true,
      },
    });

    /*====== Hot-Deals-Active ======*/
    var Hot_Deals_Slider = new Swiper(".hot-deals-slider .swiper", {
      direction: "vertical",
      slidesPerView: 2,
      loop: true,
      spaceBetween: 14,
      mousewheel: true,
      keyboard: true,
      speed: 500, // slide transition speed in milliseconds
      autoplay: {
        delay: 3000, // delay between slides in milliseconds
        disableOnInteraction: false, // enable autoplay even when user interacts with slides
      },
      navigation: {
        nextEl: ".hot-deals-slider .swiper-navigation .arrow-next",
        prevEl: ".hot-deals-slider .swiper-navigation .arrow-prev",
      },
    });

    /*====== Outlet-Menu-Slider ======*/
    var Outlet_Menu_Slider = new Swiper(".outlet-menu-slider", {
      loop: true,
      speed: 600,
      spaceBetween: 33,
      slidesPerView: 1,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".header-product-slider .arrow_next",
        prevEl: ".header-product-slider .arrow_prev",
      },
      pagination: {
        el: ".header-product-slider .slider-custom-pagination",
        clickable: true,
      },
      breakpoints: {
        380: {
          slidesPerView: 2,
        },
        680: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        },
        1080: {
          slidesPerView: 5,
        },
      },
    });

    /*====== Trending_Product_Slider ======*/
    var Trending_Slider_1 = new Swiper(".product-slider.slider-1 .swiper", {
      loop: true,
      speed: 600,
      spaceBetween: 18,
      slidesPerView: 1,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".product-slider.slider-1 .swiper-navigation .arrow-next",
        prevEl: ".product-slider.slider-1 .swiper-navigation .arrow-prev",
      },
      breakpoints: {
        380: {
          slidesPerView: 2,
        },
        680: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        },
        1080: {
          slidesPerView: 5,
        },
      },
    });

    /*====== Trending_Product_Slider ======*/
    var Trending_Slider_2 = new Swiper(".product-slider.slider-2 .swiper", {
      loop: true,
      speed: 600,
      spaceBetween: 18,
      slidesPerView: 1,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".product-slider.slider-2 .swiper-navigation .arrow-next",
        prevEl: ".product-slider.slider-2 .swiper-navigation .arrow-prev",
      },
      breakpoints: {
        380: {
          slidesPerView: 2,
        },
        680: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        },
        1080: {
          slidesPerView: 5,
        },
      },
    });

    /*====== Trending_Product_Slider ======*/
    var Trending_Slider_3 = new Swiper(".product-slider.slider-3 .swiper", {
      loop: true,
      speed: 600,
      spaceBetween: 18,
      slidesPerView: 1,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".product-slider.slider-3 .swiper-navigation .arrow-next",
        prevEl: ".product-slider.slider-3 .swiper-navigation .arrow-prev",
      },
      breakpoints: {
        380: {
          slidesPerView: 2,
        },
        680: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        },
        1080: {
          slidesPerView: 5,
        },
      },
    });

    // Initialize Isotope
    var $grid = $(".product-items").isotope({
      itemSelector: ".product-item",
      layoutMode: "fitRows",
    });

    // Use ImageLoad to wait for images to load before initializing Isotope
    $grid.imagesLoaded().progress(function () {
      $grid.isotope("layout");
    });

    // Filter buttons functionality
    $(".filter-menu").on("click", "button", function () {
        $('.filter-menu li button').removeClass('active');
        $(this).addClass('active');
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
  });

  $(window).on('load', function(){
    $('.preloader').fadeOut();
  });
})(jQuery);
