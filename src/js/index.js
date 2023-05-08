let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

<<<<<<< Updated upstream




// footer accordion section 
const accordionHeaders = document.querySelectorAll('.accodion__icon');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-body');
    const isActive = accordionItem.classList.contains('active');

    accordionHeaders.forEach(header => {
      header.parentElement.classList.remove('active');
    });

    if (!isActive) {
      accordionItem.classList.add('active');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionItem.classList.remove('active');
      accordionContent.style.maxHeight = null;
     }
  });
});


// sidebar section in mobile view
$(document).ready(function(){
    $('#menu-primary').children().click(function(){
        $(this).children('.sub-menu').toggle();     
    });
});
=======
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
>>>>>>> Stashed changes
