var slideIndex = 1;
reset_index();

// Next/previous controls
function plusSlides(n, slide_name, demo_name) {
  showSlides(slideIndex += n, slide_name, demo_name);
}

// Thumbnail image controls
function currentSlide(n, slide_name, demo_name) {
  showSlides(slideIndex = n, slide_name, demo_name);
}

function showSlides(n, slide_name, demo_name) {
  var i;
  var slides = document.getElementsByClassName(slide_name);
  var dots = document.getElementsByClassName(demo_name);
  if( slides.length >0 && dots.length > 0 ) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}

function reset_index(){
  slideIndex = 1;
  showSlides(slideIndex, 'slide_facturacion', 'demo_facturacion');
  showSlides(slideIndex, 'slide_ordernow', 'demo_ordernow');
  showSlides(slideIndex, 'slide_tarjetas', 'demo_tarjetas');
}
