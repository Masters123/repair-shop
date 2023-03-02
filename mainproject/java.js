const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let currentIndex = 0;

testimonials[currentIndex].style.display = 'block';

prevBtn.addEventListener('click', function() {
  testimonials[currentIndex].style.display = 'none';
  currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
  testimonials[currentIndex].style.display = 'block';
});

nextBtn.addEventListener('click', function() {
  testimonials[currentIndex].style.display = 'none';
  currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
  testimonials[currentIndex].style.display = 'block';
});
