$(document).ready(() => {

    $('.plus').on('click', () => {
        $('.menu-dropdown').toggleClass('hide');
        $('.plus').toggleClass('rotate');
    })

    
});


const mqDark = window.matchMedia("(prefers-color-scheme: dark)")

const darkModeToggle = document.querySelector("a.dark-mode-toggle")
const darkModeToggleText = document.querySelector("span")

const bodyTag = document.querySelector('body')

darkModeToggle.addEventListener("click", function () {
    bodyTag.classList.toggle("dark-mode");
})


const updateDarkMode = function () {
    if (mqDark.matches) {
        darkModeToggle.innerHTML= "Light mode"
    } else {
        darkModeToggle.innerHTML = "Dark mode"
    }
}

updateDarkMode()
mqDark.addListener(function () {
    updateDarkMode()
})
