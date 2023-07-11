$(document).ready(function () {
  $(window).scroll(function () {
    var header = $(".header"),
      scroll = $(window).scrollTop();

    if (scroll >= 100) header.addClass("fixed");
    else header.removeClass("fixed");
  });

  $(".links button").hover(function () {
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
    speed: 5000,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  $(".about-slider").slick({
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
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

  $(".portfolio-popup-list li a").on("click", function (e) {
    e.preventDefault();
    $(this).closest("ul").find("a").removeClass("active");
    $(this).addClass("active");
    var type = $(this).closest("ul").data("type");
    var btn = $(".portfolio-btn a[data-type=" + type + "]");
    var btnText = btn.find(".text");
    var selectedText = $(this).text();
    btnText.text(selectedText);
    var svgIcon = btn.find("svg");
    svgIcon.addClass("hide");
    var closeBtn = btn.find(".close");
    closeBtn.addClass("show");
    $(this).closest(".main-popup").magnificPopup("close");
  });

  $(".portfolio-buttons .portfolio-btn .close").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass("show");
    $(this)
      .closest(".portfolio-btn")
      .find(".button_text_container svg")
      .removeClass("hide");
    var type = $(this).closest("a").data("type");
    var list = $(".portfolio-popup-list[data-type=" + type + "]");
    list.find("a").removeClass("active");
    var defaultText = $(this)
      .closest(".portfolio-btn")
      .find(".text")
      .data("default");
    $(this).closest(".portfolio-btn").find(".text").text(defaultText);
  });

  $(".main-popup .reset").on("click", function (e) {
    e.preventDefault();
    var type = $(this)
      .closest(".popup-body")
      .find(".portfolio-popup-list")
      .data("type");
    var btn = $(".button_su_inner[data-type=" + type + "]");
    btn.find(".close").removeClass("show");
    console.log(type);
    btn.find("svg").removeClass("hide");
    var list = $(".portfolio-popup-list[data-type=" + type + "]");
    list.find("a").removeClass("active");
    var defaultText = btn.find(".text").data("default");
    btn.find(".text").text(defaultText);
    $(this).closest(".main-popup").magnificPopup("close");
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

  var contactsAnimation = function () {
    if ($(".contacts-descr").length) {
      gsap
        .timeline({
          scrollTrigger: {
            pinReparent: !0,
            trigger: ".contacts-descr",
            start: "bottom bottom",
            stop: "top top",
            scrub: 1,
            anticipatePin: 1,
            toggleActions: "play pause resume reverse",
          },
        })
        .to(".contacts-descr__fish", 1, {
          rotation: 360,
          transformOrigin: "50% 100px",
        })
        .to(
          ".contacts-descr__fish img",
          1,
          {
            rotation: -360,
          },
          0
        );
    }

    if ($(".wave").length) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".page",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            toggleActions: "play reset play pause",
          },
        })
        .to(".wave", 1, {
          ease: "linear",
          backgroundPosition: "-1700px 0px",
        }),
        gsap.timeline({
          scrollTrigger: {
            trigger: ".page",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            toggleActions: "play reset play pause",
          },
        });
    }

    if ($("#contact-cloud").length) {
      var tl, tl2, tl3;
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          tl && tl.restart();
          tl = gsap.timeline({
            repeat: -1,
            ease: "linear",
            defaults: {
              duration: 1.5,
            },
          });
          tl2 && tl2.restart(),
            (tl2 = gsap.timeline({
              ease: "linear",
            })).to(
              ".contacts-hero__img",
              {
                y: 0,
                opacity: 1,
              },
              0
            ),
            tl2.to(".contacts-hero__cloud--desktop", {
              opacity: 1,
            }),
            tl3 && tl3.restart(),
            (tl3 = gsap.timeline({
              ease: "linear",
            })).to(".contacts-hero__batiskaf img", {
              y: 0,
            }),
            ScrollTrigger.create({
              animation: tl3,
              target: ".contacts-hero",
              start: "top top",
              end: "bottom center",
              scrub: 2,
            });
        },
      });
    }

    if ($(".contacts-map").length) {
      gsap
        .timeline({
          scrollTrigger: {
            pinReparent: !0,
            trigger: ".contacts-map",
            start: "center bottom",
            stop: "top top",
            anticipatePin: 1,
            toggleActions: "play pause resume reverse",
          },
        })
        .to(".contacts-map__wrapper", 1, {
          x: 0,
        });
    }

    if ($(".develop-about__freak").length) {
      $(".develop-about__freak").length &&
        gsap
          .timeline({
            scrollTrigger: {
              pinReparent: !0,
              trigger: ".develop-about__freak",
              start: "bottom bottom",
              stop: "top top",
              scrub: 0.5,
              anticipatePin: 1,
              toggleActions: "play pause resume reverse",
            },
          })
          .to(".develop-about__freak", 1, {
            rotation: 360,
            transformOrigin: "50% 60px",
          })
          .to(
            ".develop-about__freak span",
            1,
            {
              rotation: -360,
            },
            0
          );
    }

    if ($(".develop-site").length) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".develop-site",
          start: "-20% top",
          end: "80% top",
          scrub: 1,
          onUpdate: function (self) {
            gsap.to(".develop-site__batiskaf", {
              scaleX: function () {
                return 1 === self.direction ? 1 : -1;
              },
              overwrite: "auto",
              duration: 0.1,
            });
          },
        },
      });
      tl.to(".develop-site__batiskaf", {
        y: -240,
        duration: 1,
      }),
        tl.to(".develop-site__batiskaf", {
          x: "200%",
          duration: 5,
        }),
        tl.to(".develop-site__batiskaf", {
          y: 0,
          duration: 1,
        });
    }

    if ($(".services-page-hero__img").length) {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          gsap.to(".services-page-hero__img", {
            x: -400,
            duration: 10,
            scrollTrigger: {
              trigger: ".services-page-hero__img",
              scrub: 2,
            },
          });
        },
      });
    }

    if ($(".develop-iceberg__item").length) {
      document
        .querySelectorAll(
          ".develop-iceberg__item:not(.develop-iceberg__item--top)"
        )
        .forEach(function (el) {
          tl2 = gsap.to(el, {
            scrollTrigger: {
              pinReparent: !0,
              trigger: el,
              start: "top 80%",
              anticipatePin: 1,
              toggleActions: "play pause resume reverse",
            },
            x: 0,
            duration: 0.6,
          });
        });
    }

    if ($("#contact-cloud").length) {
      var tween = KUTE.fromTo(
        "#contact-cloud",
        {
          path: "#contact-cloud",
        },
        {
          path: "#contact-cloud-animation",
        },
        {
          easing: "linear",
          yoyo: true,
          repeat: Infinity,
          duration: 1500,
        }
      ).start();
      !tween.playing && tween.start();
    }

    if ($(".develop-slider").length) {
      $(".develop-slider").length &&
        ScrollTrigger.matchMedia({
          "(min-width: 1350px)": function () {
            var tl = gsap.timeline({
              ease: "linear",
            });
            tl.fromTo(
              ".develop-cost__list",
              {
                height: "0",
                autoAlpha: 0,
                duration: 0.3,
              },
              {
                height: "auto",
                autoAlpha: 1,
                duration: 0.3,
              }
            ),
              tl.to(".develop-cost__list", {
                autoAlpha: 1,
                duration: 0.2,
              }),
              ScrollTrigger.create({
                animation: tl,
                trigger: ".develop-slider",
                toggleActions: "play none play reverse",
                start: "top 40%",
                end: "bottom center",
              });
          },
          "(max-width: 1349px)": function () {
            $(".develop-cost__list").removeAttr("style");
          },
          "(min-width: 768px)": function () {
            var tl3 = gsap
              .timeline()
              .to(
                "#diver",
                {
                  y: 250,
                },
                0
              )
              .to(
                "#diver-bubble",
                {
                  y: 100,
                },
                0
              );
            ScrollTrigger.create({
              animation: tl3,
              trigger: ".develop-slider",
              scrub: 1,
            });
          },
        });
    }

    if ($("#fish").length) {
      gsap.registerPlugin(MotionPathPlugin, ScrollTrigger),
        $("#fish").length &&
          ScrollTrigger.matchMedia({
            "(min-width: 1200px)": function () {
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: ".develop-descr__wrapper",
                    start: "top 300px top",
                    end: "+=1000",
                    scrub: 1,
                    toggleActions: "play none reverse none",
                    onUpdate: function (self) {
                      gsap.to("#fish", {
                        scaleX: function () {
                          return 1 === self.direction ? -1 : 1;
                        },
                        overwrite: "auto",
                        duration: 0.5,
                      });
                    },
                  },
                  defaults: {
                    duration: 1,
                    ease: "none",
                  },
                })
                .set("#fish", {
                  scaleY: -1,
                  scaleX: -1,
                })
                .to("#fish", {
                  rotation: 180,
                  motionPath: {
                    path: "#path-fish",
                    autoRotate: !0,
                    alignOrigin: [0.5, 0.5],
                    align: "#path-fish",
                  },
                });
            },
          });
    }

    if ($(".develop-iceberg__base").length) {
      var tl, tl2;
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          (tl = gsap.timeline({
            repeat: -1,
            defaults: {
              duration: 0.4,
            },
          }))
            .to(".develop-iceberg__base", {
              morphSVG: ".develop-iceberg__first",
            })
            .to(".develop-iceberg__base", {
              morphSVG: ".develop-iceberg__second",
            })
            .to(".develop-iceberg__base", {
              morphSVG: ".develop-iceberg__third",
            })
            .to(".develop-iceberg__base", {
              morphSVG: ".develop-iceberg__base",
            }),
            document
              .querySelectorAll(
                ".develop-iceberg__item:not(.develop-iceberg__item--top)"
              )
              .forEach(function (el) {
                tl2 = gsap.to(el, {
                  scrollTrigger: {
                    pinReparent: !0,
                    trigger: el,
                    start: "top 80%",
                    anticipatePin: 1,
                    toggleActions: "play pause resume reverse",
                  },
                  x: 0,
                  duration: 0.6,
                });
              });
        },
        "(max-width: 767px)": function () {
          tl && tl.kill(),
            tl2 && tl2.kill(),
            $(".develop-iceberg__item").removeAttr("style");
        },
      });
    }
  };

  var initSliders = function () {
    if ($(".develop-slider").length) {
      function mobileOnlySlider() {
        $(document).ready(function () {
          $(".develop-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            touchMove: true,
            prevArrow: $(".develop-slider-wrap .slider-navigation .slick-prev"),
            nextArrow: $(".develop-slider-wrap .slider-navigation .slick-next"),
            dots: false,
            pauseOnHover: false,
            responsive: [
              {
                breakpoint: 1351,
                settings: {
                  settings: "unslick",
                },
              },
            ],
          });
        });
      }
      if (window.innerWidth < 1351) {
        mobileOnlySlider();
      }
      $(window).resize(function (e) {
        if (window.innerWidth < 1351) {
          if (!$(".develop-slider").hasClass("slick-initialized")) {
            mobileOnlySlider();
          }
        } else {
          if ($(".develop-slider").hasClass("slick-initialized")) {
            $(".develop-slider").slick("unslick");
          }
        }
      });
    }

    if ($(".support-slider").length) {
      function mobileOnlySlider2() {
        $(document).ready(function () {
          $(".support-slider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            touchMove: true,
            prevArrow: $(".support-slider-wrap .slider-navigation .slick-prev"),
            nextArrow: $(".support-slider-wrap .slider-navigation .slick-next"),
            dots: true,
            pauseOnHover: false,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
              },
              {
                breakpoint: 1351,
                settings: {
                  settings: "unslick",
                },
              },
            ],
          });
        });
      }
      if (window.innerWidth < 1351) {
        mobileOnlySlider2();
      }
      $(window).resize(function (e) {
        if (window.innerWidth < 1351) {
          if (!$(".support-slider").hasClass("slick-initialized")) {
            mobileOnlySlider2();
          }
        } else {
          if ($(".support-slider").hasClass("slick-initialized")) {
            $(".support-slider").slick("unslick");
          }
        }
      });
    }
  };

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
          contactsAnimation();
          initSliders();
          if (_success) {
            return _success();
          }
        }
      }, 20);
  }

  $(".drop-list-item .item-heading").on("click", function (e) {
    e.preventDefault();
    if ($(this).find("span").hasClass("rotate")) {
      $(this).find("span").removeClass("rotate");
    } else {
      $(".drop-list-item span").removeClass("rotate");
      $(this).find("span").addClass("rotate");
    }
    $(".drop-list-item").removeClass("opened");
    $(".item-body").removeClass("active");
    $(this).closest(".drop-list-item").find(".item-body").addClass("active");
    $(this).closest(".drop-list-item").addClass("opened");
    $(".item-body:not(.active)").slideUp();
    $(".drop-list-item:not(.opened)").removeClass("active");
    $(this).closest(".drop-list-item").find(".item-body").slideToggle();
    $(this).closest(".drop-list-item").toggleClass("active");
  });

  $(".develop-about--akkordion .develop-about__akkordion-title").on(
    "click",
    function () {
      $(this)
        .closest(".develop-about__akkordion-item")
        .find(".develop-about__akkordion-text")
        .slideToggle();
    }
  );

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
