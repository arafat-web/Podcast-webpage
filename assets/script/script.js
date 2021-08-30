var slideIndex = 1;
var bg = document.getElementById("bg");
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  if(slideIndex  == 1){
    bg.style.backgroundColor = '#4a4325';
  } else{
    bg.style.backgroundColor = '#b36b2b';
  }
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) 
  {
      slideIndex = 1

    

    
    }    
  if (n < 1) 
  {
      slideIndex = slides.length
     
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}