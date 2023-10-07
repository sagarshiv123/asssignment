let menu = document.getElementById('menu-bars');
let navbar = document.querySelector('.navbar');
let menuBar = document.getElementById('myDiv')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    menuBar.classList.toggle('showDiv')
}


const toggleButton = document.getElementById('toggleButton');
const container = document.getElementById('form-footer');

toggleButton.addEventListener('click', () => {
    container.classList.toggle('hidden');
});

const toggleButtonn = document.getElementById('toggleButton-icon');
const containers = document.getElementById('form-footer');

toggleButtonn.addEventListener('click', () => {
    containers.classList.toggle('hidden');
});


const slides = document.querySelectorAll(".slider-slide");
let currentSlide = 0;

function showSlide(slideIndex) {
slides.forEach((slide, index) => {
if (index === slideIndex) {
  slide.classList.add("actives");
} else {
  slide.classList.remove("actives");
}
});
}

function nextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

function previousSlide() {
currentSlide = (currentSlide - 1 + slides.length) % slides.length;
showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 5000);

