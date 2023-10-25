// notatnik z zajęć

const main = document.querySelector('main')
const slider = document.querySelector('.slides')
const slides = document.querySelectorAll('.slides img');

const wstecz = document.querySelector('.wstecz')
const dalej = document.querySelector('.dalej')

slide_index = 0

// wykonywanie kodu co określony czas
let licznik = 0
const intervalRef = setInterval(
    () => {
        main.innerHTML = `Msg from setInterval: ${licznik++}`
    },
    4000
)

function previous_slide() {
    if (slide_index != 0) {
        slides[slide_index] = slides[slide_index-1]
        slide_index--
        console.log(slide_index)
    }
}

function next_slide() {
    if (slide_index != 6) {
        slider.style.backgroundPosition = "-600px"
        slide_index++
        console.log(slide_index)
    }
}

wstecz.addEventListener("click", previous_slide)
dalej.addEventListener("click", next_slide)

// kasujemy setInterval
// clearInterval(intervalRef)

// kasujemy setTimeout
// clearTimeout(intervalRef)


// window.requestAnimationFrame