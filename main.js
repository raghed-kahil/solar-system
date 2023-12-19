// best comment for best teacher

var carouselItems = document.querySelectorAll('.landing-carousel-item');
var carouselDots = document.querySelectorAll('.landing-carousel-dots>.dot');
var currentItem = 0;

function scrollToCarouselItem(i) {
    carouselDots[currentItem].classList.remove('active');
    carouselDots[i].classList.add('active');

    document.getElementById('carousel-scroll-container').scrollTo({
        left: window.innerWidth * i,
        behavior: 'smooth'
    })
    currentItem = i;
}
// assign event listiners
carouselDots.forEach((dot, i) => {
    dot.addEventListener('click', ev => {
        ev.preventDefault();
        scrollToCarouselItem(i);
    })
})

// auto scroll
setInterval(() => {
    scrollToCarouselItem((currentItem + 1) % carouselItems.length)
}, 2500);


