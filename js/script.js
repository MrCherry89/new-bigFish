$(document).ready(function () {
  $(window).scroll(function () {
    var header = $(".header"),
      scroll = $(window).scrollTop();

    if (scroll >= header.height()) header.addClass("fixed");
    else header.removeClass("fixed");
  });

  $(".links button").hover(function () {
    $(".links button").removeClass("active");
    $(this).addClass("active");
    var value = $(this).attr("data-src");
    $(".arkanoid img").attr("src", value);
  });

  var fileInput = document.querySelector(".input-file"),
    button = document.querySelector(".input-file-trigger"),
    the_return = document.querySelector(".file-return");

  button.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
      fileInput.focus();
    }
  });
  button.addEventListener("click", function (event) {
    fileInput.focus();
    return false;
  });
  fileInput.addEventListener("change", function (event) {
    the_return.innerHTML = this.value;
  });

  $(".personal-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    variableWidth: true,
    autoplaySpeed: 1,
    swipe: false,
    speed: 5000,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  $(".about-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 1);

  $(".menu-block .transparent-btn").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".header-top").find(".menu-wrap").addClass("open");
    $("body, html").addClass("overflow");
  });

  $(".close-menu").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".header-top").find(".menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  });

  $(".header-video-wrap .circle").on("mouseover", function () {
    $(".video-wrap").addClass("opened");
    $(".header-video-wrap").addClass("hovered");
  });

  $(".header-video-wrap .video-wrap").on("mouseleave", function () {
    if (!$(".header-video-wrap").hasClass("full")) {
      $(".video-wrap").removeClass("opened");
      $(".header-video-wrap").removeClass("hovered");
      $(".video iframe").attr("src", $(".video iframe").attr("src"));
    }
  });

  $(".header-video-wrap .circle").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("open");
    $(".video iframe").attr("src", $(".video iframe").attr("src"));
    $(".header-video-wrap").toggleClass("full");
    $(".header-video-wrap .video-wrap .video").toggleClass("open");
  });

  $(".button_su_inner").mouseenter(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".button_circle").css({
      left: relX,
      top: relY,
    });
    $(this).prev(".button_circle").removeClass("desplode-circle");
    $(this).prev(".button_circle").addClass("explode-circle");
  });

  $(".button_su_inner").mouseleave(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".button_circle").css({
      left: relX,
      top: relY,
    });
    $(this).prev(".button_circle").removeClass("explode-circle");
    $(this).prev(".button_circle").addClass("desplode-circle");
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: -1,
  });

  $(".personal-slider2").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    autoplaySpeed: 1,
    speed: 3000,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 1);

  var $status = $(".pagingInfo");
  var $slickElement = $(".pilkington-slider");

  $slickElement.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + " / " + slick.slideCount);
    }
  );

  $slickElement.slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    variableWidth: true,
    infinite: false,
    slidesToScroll: 1,
    prevArrow: $(".pilkington-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".pilkington-slider-wrap .slider-navigation .slick-next"),
  });

  $(".accordion-list-item .item-heading").on("click", function (e) {
    e.preventDefault();
    if ($(this).find(".show-img").hasClass("rotate")) {
      $(this).find(".show-img").removeClass("rotate");
    } else {
      $(".accordion-list-item .show-img").removeClass("rotate");
      $(this).find(".show-img").addClass("rotate");
    }
    $(".accordion-list-item").removeClass("opened");
    $(".item-body").removeClass("active");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .addClass("active");
    $(this).closest(".accordion-list-item").addClass("opened");
    $(".item-body:not(.active)").slideUp();
    $(".accordion-list-item:not(.opened)").removeClass("active");
    $(this).closest(".accordion-list-item").find(".item-body").slideToggle();
    $(this).closest(".accordion-list-item").toggleClass("active");
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
    removalDelay: 500,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });

  $(".portfolio-project-wrap .button-hover").on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".portfolio-project-wrap")
      .find(".project-item-wrap")
      .addClass("show");
  });

  loader();

  document.querySelector(".page").onload = loader;

  function loader(_success) {
    var obj = document.querySelector(".preloader"),
      inner = document.querySelector(".preloader_inner"),
      inner2 = document.querySelector(".preloader_inner2"),
      page = document.querySelector(".page");
    obj.classList.add("loader-show");
    page.classList.remove("loader-show");
    var w = 0,
      t = setInterval(function () {
        w = w + 1;
        inner.textContent = w + "%";
        inner2.style.width = w + "%";
        if (w === 100) {
          obj.classList.remove("loader-show");
          page.classList.add("loader-show");
          clearInterval(t);
          w = 0;
          if (_success) {
            return _success();
          }
        }
      }, 20);
  }

  (function () {
    "use strict";
    const portfolioClick = document.querySelector(".portfolio-item-click"),
      portfolioClickFollower = document.querySelector(
        ".portfolio-item-click-follower"
      );
    if (portfolioClick && portfolioClickFollower) {
      let imgs = document.querySelectorAll(".portfolio-item-img"),
        servicesItems = document.querySelectorAll(".services-item"),
        posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;
      setInterval(function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        TweenMax.set(portfolioClickFollower, {
          css: {
            left: posX - 20,
            top: posY - 20,
          },
        });
        TweenMax.set(portfolioClick, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      }, 15);
      document.querySelector("body").addEventListener("mousemove", (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
      });
      if (imgs.length > 0) {
        imgs.forEach(function (elem, index) {
          elem.addEventListener("mouseenter", (e) => {
            portfolioClickFollower.classList.add("active");
          });
          elem.addEventListener("mouseleave", (e) => {
            portfolioClickFollower.classList.remove("active");
          });
        });
      }
      if (servicesItems.length > 0) {
        servicesItems.forEach(function (elem, index) {
          elem.addEventListener("mouseenter", (e) => {
            let dataItem = elem.getAttribute("data-item"),
              dataSwipers = document.querySelectorAll(
                ".services__follower-swiper"
              );
            portfolioClickFollower.classList.add("active");
            if (dataSwipers.length > 0) {
              dataSwipers.forEach((item) => {
                let dItem = item.getAttribute("data-item");
                if (dItem === dataItem) {
                  item.classList.add("active");
                } else {
                  item.classList.remove("active");
                }
              });
            }
          });
          elem.addEventListener("mouseleave", (e) => {
            portfolioClickFollower.classList.remove("active");
          });
        });
      }
    }
    let typeSplit = new SplitType(".btn-title", {
      types: "words, chars, lines",
      tagName: "span",
    });

    function mainButtonHover() {
      $(".btn").each(function (e) {
        let o = $(this).find(".title1 .char"),
          t = $(this).find(".title2 .char"),
          i = gsap.timeline({
            paused: !0,
            defaults: {
              duration: 0.6,
              ease: "power4.inOut",
            },
          });
        i.to(o, {
          y: "-100%",
          stagger: {
            each: 0.03,
          },
        }),
          i.from(
            t,
            {
              y: "100%",
              stagger: {
                each: 0.03,
              },
            },
            0.1
          ),
          $(this).on("mouseenter", function () {
            i.isActive() || i.restart();
          });
      });
    }
    let mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => (mainButtonHover(), () => {}));
    const servicesItems = document.querySelectorAll(".services__item");
    if (servicesItems.length > 0) {
      servicesItems.forEach((item) => {
        $(item).on("click", function () {
          item.classList.toggle("_active");
          $(this).find(".services__item-content").slideToggle("1500");
        });
      });
    }
    const servicesFollowersSwiper = document.querySelectorAll(
      ".services__follower-swiper"
    );
    if (servicesFollowersSwiper.length > 0) {
      servicesFollowersSwiper.forEach((item) => {
        new Swiper(item, {
          effect: "fade",
          speed: 500,
          fadeEffect: {
            crossFade: true,
          },
          autoplay: {
            delay: 500,
            disableOnInteraction: false,
          },
        });
      });
    }
    $(".services__item-link").mouseenter(function (e) {
      var parentOffset = $(this).offset();
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).find(".services__item-link-circle").css({
        left: relX,
        top: relY,
      });
      $(this)
        .find(".services__item-link-circle")
        .removeClass("desplode-circle");
      $(this).find(".services__item-link-circle").addClass("explode-circle");
    });
    $(".services__item-link").mouseleave(function (e) {
      var parentOffset = $(this).offset();
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).find(".services__item-link-circle").css({
        left: relX,
        top: relY,
      });
      $(this).find(".services__item-link-circle").removeClass("explode-circle");
      $(this).find(".services__item-link-circle").addClass("desplode-circle");
    });
  })();

  AOS.init();

  $(".header-animate").ripples({
    resolution: 256,
    dropRadius: 20,
    perturbance: 0.02,
    imageUrl: $('.header-animate').attr('data-img'),
  });
});

(function() {
  'use strict';

  /* Разделение текста через splittype */
  const split_type_init = document.querySelectorAll('[data-splittype-lines]');
  if ( split_type_init.length > 0 ) {
    split_type_init.forEach( item => {
      let split_type = new SplitType( item,
          {
            types: item.getAttribute('data-splittype-lines'),
            tagName: 'span',
            lineClass: '',
            charClass: ''
          }
      );

      /* Добавление тексту, разделенному через splittype, анимации */
      let split_type_lines = item.querySelectorAll('span');
      if ( split_type_lines.length > 0 ) {
        split_type_lines.forEach((line, index) => {
          let data_parent = line.closest('[data-splittype-lines]'),
              data_duration = +data_parent.getAttribute('data-aoss-duration') + +data_parent.getAttribute('data-aoss-duration-step') * index,
              data_delay = +data_parent.getAttribute('data-aoss-delay') + +data_parent.getAttribute('data-aoss-delay-step') * index;
          line.setAttribute('data-aos', data_parent.getAttribute('data-aoss'));
          line.setAttribute('data-aos-offset', data_parent.getAttribute('data-aoss-offset'));
          line.setAttribute('data-aos-delay', data_delay);
          line.setAttribute('data-aos-easing', data_parent.getAttribute('data-aoss-easing'));
          line.setAttribute('data-aos-duration', data_duration);
        });
      }
    });
  }

})();
