var button = document.querySelector('#btn')
var popUp = document.querySelector('#pop-up')
var close = document.querySelector('#close')

button.addEventListener('click', function(e) {
    popUp.style.display = 'flex'
})

close.addEventListener('click', function(e) {
    popUp.style.display = 'none'
})

$(document).ready(function() {
    $('.your-class').slick({
        dots: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                },
            },
        ],
    })
})
