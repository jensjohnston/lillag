$(document).ready(() => {


    //Lightbox
    $("a.pop-up").on("click", function (event) { 
        $("div.lightbox").fadeIn()
        
        event.preventDefault() 
    })
    
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

const slides = document.querySelector(".slideshow")
const pagination = document.querySelectorAll(".pagination-circle")

let current = 0
let z = 10000000

const images = slides.querySelectorAll("img")

images.forEach(image => {
    z = z - 1
    image.style.zIndex = z
})

const slideshow = slides.addEventListener("click", function() {
    z = z - 1

    images[current].style.zIndex = z

    current = current + 1
    current = current % images.length

})


pagination.addEventListener("click", function() {
    
})


