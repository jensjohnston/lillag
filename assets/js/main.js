$(document).ready(() => {


    //Lightbox
    $("a.pop-up").on("click", function (event) { 
        $("div.lightbox").fadeIn()
        
        event.preventDefault() 
    })
    
    $("div.lightbox-background").on("click", function () { 
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










// const mqDark = window.matchMedia("(prefers-color-scheme: dark)")

// const darkModeToggle = document.querySelector("a.dark-mode-toggle")
// const darkModeToggleText = document.querySelector("span")

// const bodyTag = document.querySelector("body")

// darkModeToggle.addEventListener("click", function () {
//     bodyTag.classList.toggle("dark-mode");

//     if (bodyTag.classList.contains("dark-mode")) {
//         darkModeToggleText.innerHTML = "Light Mode"
//     } else {
//         darkModeToggleText.innerHTML = "Dark Mode"
//     }
// })


// const updateDarkMode = function () {
//     if (mqDark.matches) {
//         bodyTag.classList.add("dark-mode")
//         darkModeToggleTextinnerHTML= "Light mode"
//     } else {
//         darkModeToggleText.innerHTML = "Dark mode"
//         bodyTag.classList.remove("dark-mode")
//     }
// }

// updateDarkMode()
// mqDark.addListener(function () {
//     updateDarkMode()
// })
