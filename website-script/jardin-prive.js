const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons 
const prevBtn = document.querySelector('#prevBtn');
const nextvBtn = document.querySelector('#nextBtn');

//Counter 
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

//Button Listeners 

nextBtn.addEventListener('click',()=>{
    if(counter <=0) return
    carouselSlide.style.transition = "transform 0.4 ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
});

prevBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.4 ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
});