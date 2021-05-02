$(document).ready(() => {
    
    $("div.lightbox-background").on("click", function () { 
        $("div.lightbox").fadeOut()
    })

    $(".modal-close").on("click", function () { 
        $("div.lightbox").fadeOut()
    })


    //Navigation
    $('.plus').on('click', () => {
        $('.menu-dropdown').toggleClass('hide');
        $('.plus').toggleClass('rotate');
    })

});




const questions = document.querySelectorAll('section') 
const lightbox = document.querySelector('.lightbox')

questions.forEach((question) => {
    const opener = question.querySelector('.image') 
        opener.addEventListener('click', () => {
            [...questions].filter(q => q !== question).forEach(q => q.classList.remove('opened'))
            question.classList.toggle('opened')
        })
})

const slides = document.querySelector(".slideshow")
const pagination = document.querySelectorAll(".pagination-circle")

let current = 0
let z = 10000000


const slideshow = slides.addEventListener("click", function() {
    z = z - 1

    images[current].style.zIndex = z

    current = current + 1
    current = current % images.length

})


pagination.addEventListener("click", function() {
    
})


