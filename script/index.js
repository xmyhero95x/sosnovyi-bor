"use strict"
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});
function up() {
  let t;
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  if (anchor.getAttribute('href') != '#') {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      burger.classList.remove("active");
      menu.classList.remove("active");
    })
  }
}
document.addEventListener("click", closeBurger);
function closeBurger(event) {
  const header = document.querySelector(".header");
  let isClickInside = header.contains(event.target);
  if (!isClickInside) {
    menu.classList.remove('active');
    burger.classList.remove("active");
  }
}
new Swiper('.home-slider', {
  autoplay: {
    delay: 3200,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 800,
  grabCursor: true,
  slideToClickedSlide: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  infinite: true,
  on: {
    init() {
      this.el.addEventListener('click', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('click', () => {
        this.autoplay.start();
      });
    }
  },
});
new Swiper('.layouts-slider', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  autoplay: {
    delay: 2000,
  },
  speed: 800,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slideToClickedSlide: true,
  spaceBetween: 15,
  centeredSlides: true,
  initialSlide: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 0,
      loop: false,
    },
    768: {
      slidesPerView: 3,
      loop: true,
    },
    1024: {
      slidesPerView: 3,
      loop: true,
      infinite: true,
    }
  },
  on: {
    init() {
      this.el.addEventListener('click', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('click', () => {
        this.autoplay.start();
      });
    }
  },
});

window.addEventListener("touchstart", touchHandler, false);
function touchHandler(event){
  if(event.touches.length > 1){
      //the event is multi-touch
      //you can then prevent the behavior
      event.preventDefault()
  }
}

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "./mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за отправку формы!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});