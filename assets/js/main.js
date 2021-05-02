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
    const backDrop = document.querySelector('div.lightbox-background')
    const modalClose = document.querySelector('div.lightbox-background')
    const opener = question.querySelector('.image') 

        opener.addEventListener('click', () => {
            [...questions].filter(q => q !== question).forEach(q => q.classList.remove('opened'))
            question.classList.toggle('opened')
        })

        modalClose.addEventListener('click', () => {
            [...questions].filter(q => q !== question).forEach(q => q.classList.remove('opened'))
            question.classList.remove('opened')
        })
})





