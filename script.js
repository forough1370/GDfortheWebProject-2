$(document).ready(function () {

$('.menu').click(function() {
  $(this).toggleClass('open');
});


/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}*/

/*var slideIndex = 1;
         showSlides(slideIndex);
 
         function plusSlides(n) {
             showSlides(slideIndex = slideIndex + n);
         }
 
         function currentSlide(n) {
             showSlides(slideIndex = n);
         }
 
         function showSlides(n) {
             var slides = document.getElementsByClassName("mySlides");
             if (n > 6) {
                 slideIndex = 1
             }
             if (n < 1) {
                 slideIndex = 6
             }
             slides[0].style.display = "none";
             slides[1].style.display = "none";
             slides[2].style.display = "none";
             slides[3].style.display = "none";
             slides[4].style.display = "none";
             slides[slideIndex - 1].style.display = "block";
         }*/


});

