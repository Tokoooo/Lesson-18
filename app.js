// function realTimeClock() {
//     let rtClock = new Date()
//
//     let hours = rtClock.getHours()
//     let minutes = rtClock.getMinutes()
//     let seconds = rtClock.getSeconds()
//
//     hours = (hours > 12) ? hours - 12 : hours;
//     hours = ("0" + hours).slice(-2);
//     minutes = ("0" + minutes).slice(-2)
//     seconds = ("0" + seconds).slice(-2)
//
//     document.getElementById('clock').innerHTML =
//         hours + " : " + minutes + " : " + seconds
//     setTimeout(realTimeClock, 1000)
// }
//

let slides = document.querySelectorAll('.slide')
let btns = document.querySelectorAll('.btn')
let currentSlide = 1;


let manualNav = function (manual) {

    slides.forEach(( slide) => {
        slide.classList.remove('active')

        btns.forEach((btn) => {
            btn.classList.remove('active')
        })
    })

    slides[manual].classList.add('active')
    btns[manual].classList.add('active')
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    })
})

let repeat = function (activeClass) {
    let active = document.getElementsByClassName('active')
    let i = 1

    let repeater = () => {
        setTimeout(function () {
            slides[i].classList.add('active')
            btns[i].classList.add('active')
            i++
            if (slides.length === i) {
                i = 0
            }
            if (i >= slides.length) {
                return;
            }
            repeater()
        }, 5000)
    }
    repeater()
}
repeat()

let nextLecture = new Date('March 17, 2023 20:00:00').getTime()
let intervalId = setInterval( () => {
    let now = new Date().getTime()
    let timeRemaining = nextLecture - now;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))

    let countDownString = days + "d " + hours + "h " + minutes + "m "

    let countDownEl = document.getElementById('countdown')
    countDownEl.textContent = countDownString

    if (timeRemaining <= 0) {
        clearInterval(intervalID)
        countDownEl.textContent = "The lecture has started"
    }
}, 1000);
