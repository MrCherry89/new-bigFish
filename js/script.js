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

  new WOW().init();

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

  $(".header").ripples({
    resolution: 256,
    dropRadius: 20,
    perturbance: 0.02,
    imageUrl: "img/home-bg.jpg",
  });

  $("#form").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Заполните поле",
      },
      phone: {
        required: "Заполните поле",
      },
      email: {
        required: "Заполните поле",
      },
    },
  });

  $("#form").on("submit", function (e) {
    e.preventDefault();
    if ($("#form").valid()) {
      $(this).closest(".form-wrap").hide();
      $(".form-valid").show();
    }
  });

  AOS.init();

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
      types: "chars",
      tagName: "span",
    });

    function mainButtonHover() {
      $(".btn").each(function (e) {
        let o = $(this).find(".title1 .letter"),
          t = $(this).find(".title2 .letter"),
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
});
