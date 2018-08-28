$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed === true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});

/*kontakt forma*/

// Kontakt hover
$(document).ready(function () {

    $("#nav li").hover(
        function () {
            $(this).children('ul').hide();
            $(this).children('ul').slideDown('slow');
        },
        function () {
            $('ul', this).slideUp('slow');
        });
});


/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// Image slider
(function () {

    function Slideshow(element) {
        this.el = document.querySelector(element);
        this.init();
    }

    Slideshow.prototype = {
        init: function () {
            this.wrapper = this.el.querySelector(".slider-wrapper");
            this.slides = this.el.querySelectorAll(".slide");
            this.previous = this.el.querySelector(".slider-previous");
            this.next = this.el.querySelector(".slider-next");
            this.index = 0;
            this.total = this.slides.length;
            this.timer = null;

            this.action();
            this.stopStart();
        },
        _slideTo: function (slide) {
            var currentSlide = this.slides[slide];
            currentSlide.style.opacity = 1;

            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides[i];
                if (slide !== currentSlide) {
                    slide.style.opacity = 0;
                }
            }
        },
        action: function () {
            var self = this;
            self.timer = setInterval(function () {
                self.index++;
                if (self.index == self.slides.length) {
                    self.index = 0;
                }
                self._slideTo(self.index);
            }, 3000);
        },
        stopStart: function () {
            var self = this;
            self.el.addEventListener("mouseover", function () {
                clearInterval(self.timer);
                self.timer = null;
            }, false);
            self.el.addEventListener("mouseout", function () {
                self.action();
            }, false);
        }
    };
    document.addEventListener("DOMContentLoaded", function () {
        var slider = new Slideshow("#main-slider");
    });
})();

// Kontakt submitz

function changeText() {
    $(document).ready(function () {
        $('#contact-form').hide();
    });

    var uspjeh = document.getElementById("uspjeh");
    uspjeh.innerHTML = "Poruka uspjesno poslana!";

    var name = document.getElementById("ime");
    name.innerHTML = "Ime: " + document.contactForm.name.value;

    var email = document.getElementById("mail");
    email.innerHTML = "Email: " + document.contactForm.email.value;

    var phone = document.getElementById("telefon");
    phone.innerHTML = "Telefon: " + document.contactForm.phone.value;

    var message = document.getElementById("poruka");
    message.innerHTML = "Vasa poruka: " + document.contactForm.message.value;

    var sendAnother = document.getElementById("hiddenButton").style.display = "unset";
}

// Galerija klik

$(document).ready(function () {
    $(".slikeProizvoda").click(function () {
       $(this).animate({opacity: 0});
       $(this).animate({opacity: 1}); 
    });
});


/* povratak na vrh DUGME */

$('a.top').click(function () {
$(document.body).animate({scrollTop : 0},800);
return false;
});