$(document).ready(() => {

    $('.plus').on('click', () => {
        $('.menu-dropdown').toggleClass('hide');
        $('.plus').toggleClass('rotate');
    })

    
});


const mqDark = window.matchMedia("(prefers-color-scheme: dark)")


const darkModeToggle = document.querySelector("a.dark-mode-toggle")
const darkModeToggleText = darkModeToggle.querySelector("span")

const bodyTag = document.querySelector("body")

darkModeToggleText.addEventListener("click", function () {
    bodyTag.classList.toggle("dark-mode")
})

const updateDarkMode = function () {
    if (mqDark.matches) {
        bodyTag.classList.add("dark-mode")
        darkModeToggleText.innerHTML = "Light mode"
    } else {
        bodyTag.classList.remove("dark-mode")
        darkModeToggleText.innerHTML = "Dark mode"
    }
}

updateDarkMode()
mqDark.addListener(function () {
    updateDarkMode()
})

