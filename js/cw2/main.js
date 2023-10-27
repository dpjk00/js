const images = document.querySelectorAll('.slide-image');
const navDots = document.querySelectorAll('.nav-dot');

let current_index = 0;

function show_image(index) {
    current_index = index;
    update_image();
}

function prev_image() {
    current_index = (current_index - 1 + images.length) % images.length;
    update_image();
}

function next_image() {
    current_index = (current_index + 1) % images.length;
    update_image();
}

function update_image() {
    const offset = current_index * -100;
    const image = document.querySelector('.slides')
    image.style.transform = `translateX(${offset}%)`;

    navDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === current_index);
    });
}

setInterval(next_image, 3000);