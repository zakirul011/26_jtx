(function ($) {
   "use strict";

   /*=========================
	PRELOADER JS
	===========================*/
   $(window).on("load", function (event) {
      $(".preloader").delay(500).fadeOut(500);
   });


   /*=========================
	hero-slider
	===========================*/
   function heroSlider() {
      var BasicSlider = $(".hero-slider");
      BasicSlider.on("init", function (e, slick) {
         var $firstAnimatingElements = $(".hero-slide:first-child").find(
            "[data-animation]"
         );
         doAnimations($firstAnimatingElements);
      });
      BasicSlider.on(
         "beforeChange",
         function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(
               '.hero-slide[data-slick-index="' + nextSlide + '"]'
            ).find("[data-animation]");
            doAnimations($animatingElements);
         }
      );
      BasicSlider.slick({
         autoplay: false,
         autoplaySpeed: 10000,
         fade: true,
         dots: true,
         arrows: false,
      });

      function doAnimations(elements) {
         var animationEndEvents =
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
         elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data("delay");
            var $animationType = "animated " + $this.data("animation");
            $this.css({
               "animation-delay": $animationDelay,
               "-webkit-animation-delay": $animationDelay,
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
               $this.removeClass($animationType);
            });
         });
      }
   }
   heroSlider();
   
   // installation-slider
   $(".installation-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
   });

   /*=========================
	category-slider
	===========================*/
   $(".category-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: false,

      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
   });


   /*=========================
	feature-slider
	===========================*/
   var featureSlider =  $(".feature-slider")

   featureSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      let next_slick_img = $('.feature-slider .slick-current').next().find('.feature-shape').css('background-image')
      let prev_slick_img = $('.feature-slider .slick-current').prev().find('.feature-shape').css('background-image')

      let next_slick_title = $('.feature-slider .slick-current').next().find('.title').text()
      let prev_slick_title = $('.feature-slider .slick-current').prev().find('.title').text()

      $('.feature-slider .slick-bx-next').css('background-image', next_slick_img);
      $('.feature-slider .slick-bx-prev').css('background-image', prev_slick_img);

      $('.feature-slider .slick-bx-next h3').text(next_slick_title);
      $('.feature-slider .slick-bx-prev h3').text(prev_slick_title);
  });

  featureSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: '<div class="slick-bx slick-bx-prev section-overlay bg-attachment"><button type="button" class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button><h3>JTX</h3></div>',
      nextArrow: '<div class="slick-bx slick-bx-next section-overlay bg-attachment"><button type="button" class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button><h3>JTX</h3></div>',
   });


   var testimonySlider =  $(".testimony-slider")

   testimonySlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){

      let next_slick_Name = $('.testimony-slider .slick-current').next().find('.client-name').html()
      let prev_slick_Name = $('.testimony-slider .slick-current').prev().find('.client-name').html()

      $('.testimont-next .client-name').html(next_slick_Name);
      $('.testimont-prev .client-name').html(prev_slick_Name);

      let next_slick_img = $('.testimony-slider .slick-current').next().find('.client-img').attr("src")
      let prev_slick_img = $('.testimony-slider .slick-current').prev().find('.client-img').attr("src")

      $('.testimont-next .client-img').attr("src", next_slick_img);
      $('.testimont-prev .client-img').attr("src", prev_slick_img);
  });

  testimonySlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      prevArrow: '.testimont-prev',
      nextArrow: '.testimont-next',
   });


   /*=========================
	magnificPopup image JS
	===========================*/
   $(".video-btn").magnificPopup({
      type: "iframe",
   });

   $(".pop-img-btn").magnificPopup({
      type: "image",
   });
   $(".gallery-item a").magnificPopup({
      type: "image",
      gallery: {
         enabled: true,
      },
   });

   /*=========================
	SCROLL-UP JS
	===========================*/
   $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "300", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "fade", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
   });

   // skrollr
   var s = skrollr.init({
      forceHeight: false,
      smoothScrollingDuration : 500,
   });
   if (s.isMobile()) {
      s.destroy();
   }

   // niceSelect
   $("select").niceSelect();

   // custom tab
   tabFunc(
      document.querySelectorAll(".category-navs li"),
      document.querySelectorAll(".category-tab")
   );

   function tabFunc(tabLinks, tabs) {
      tabLinks.forEach((link, index) => {
         link.addEventListener("click", () => {
            for (let i = 0; i < tabLinks.length; i++) {
               tabLinks[i].classList.remove("active");
               tabs[i].classList.remove("active");
            }
            link.classList.add("active");
            tabs[index].classList.add("active");
         });
      });
   }

   // mobile menu
   const menuLink = document.querySelectorAll('.mainmenu li')
   const openMenu = document.querySelectorAll('.humberger-bar, .close-menu, .ovarlay-menu')

   menuLink.forEach(link => {
      if (link.contains(link.querySelector('.submenu'))) {
         link.classList.add('has-child')
         link.querySelector('a').addEventListener('click', (e)=>{
            e.preventDefault();
         })
         let submenu = link.querySelector('.submenu')
         if (window.matchMedia("(max-width: 991px)").matches) {
            link.addEventListener('click', ()=>{
               link.classList.toggle('active')
               submenu.classList.toggle('active')
               if (submenu.style.maxHeight) {
                  submenu.style.maxHeight = null
               }else{
                  submenu.style.maxHeight = submenu.style.maxHeight = submenu.scrollHeight + 'px'
               }
            })
         }
      }
   });
   openMenu.forEach(btn => {
      btn.addEventListener('click', (e)=>{
         e.preventDefault();
         for (let i = 0; i < openMenu.length; i++) {
            openMenu[i].classList.toggle('active')
         }
         document.querySelector('.mainmenu').classList.toggle('active')
      })
   });

   // sticky
	var wind = $(window);
	var sticky = $('.header-content');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});


})(jQuery);
