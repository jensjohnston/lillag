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

    //About
    var phrases = [
        "Lilla Gemaket",
        "Lilla Gemaket is a creative collective",
        "Lilla Gemaket is a creative collective founded in 2013.",
        "Lilla Gemaket is a creative collective founded in 2013. With an interest for naturalistic beliefs",
        "Lilla Gemaket is a creative collective founded in 2013. With an interest for naturalistic beliefs and tech innovation",
        "Lilla Gemaket is a creative collective founded in 2013. With an interest for naturalistic beliefs and tech innovation we are exploring different fields to create what we believe",
        "Lilla Gemaket is a creative collective founded in 2013. With an interest for naturalistic beliefs and tech innovation we are exploring different fields to create what we believe to be pieces for the next generation."
    ]

    $("input").on("input", function () {
        var inputValue = $(this).val()

        var phrase = phrases[inputValue]

        $("div.phrase").html(phrase)
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


