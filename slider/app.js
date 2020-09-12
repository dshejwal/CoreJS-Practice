const sliders = document.querySelector('.slider-items');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderSize = sliders.children[0].clientWidth;
let count = 1,
    widthSet = 0;

// initial disable prev btn.
prevBtn.classList.add("disable-btn");

// Button next & prev.
nextBtn.addEventListener('click', () => {

    if (count > (sliders.children.length - 1)) {
        return false;
    } else if (count > (sliders.children.length - 2)) {
        nextBtn.classList.add("disable-btn");
    } else {
        prevBtn.classList.remove("disable-btn");
    }

    widthSet = widthSet + sliderSize;
    sliders.style.transform = 'translateX(' + -widthSet + 'px)';
    count++;
});

prevBtn.addEventListener('click', () => {

    if (count == 1) {
        return false;
    } else if (count == 2) {
        prevBtn.classList.add("disable-btn");
    } else {
        nextBtn.classList.remove("disable-btn");
    }

    widthSet = widthSet - sliderSize;
    sliders.style.transform = 'translateX(' + -widthSet + 'px)';
    count--;
});