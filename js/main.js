window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

let btn = document.querySelector('.nav-btn');
let nav = document.querySelector('nav');
let aboutBtn = document.querySelector('.about-btn');
let workBtn = document.querySelector('.work-btn');
let educationBtn = document.querySelector('.education-btn');
let skillsBtn = document.querySelector('.skills-btn');
let navBtns = document.querySelectorAll('[data-btn]');
let contact = document.querySelectorAll('.contact');
let count = 0;


btn.addEventListener('click',openCloseNav);


navBtns.forEach(function(e) {
    e.addEventListener('click', function(e) {
        e.preventDefault();
		count = 0;

        $('body').removeClass('stop-scrolling');
        $(nav).css({
            left: '-100%',
        });
        $(btn).children('.bar-2').css({left: '0'});;
        $(btn).children('.bar-1').css({
            transform: 'rotate(' + 0 + 'deg)',
            top: 0 + 'px',
        });
        $(btn).children('.bar-3').css({
            transform: 'rotate(' + 0 + 'deg)',
            top: 0,
        });
       section = document.querySelector('.'+$(this).attr('data-btn'))
       section.scrollIntoView({behavior: "smooth"});
    })
})


function openCloseNav() {
	   count++;
    $(btn).children('.bar-2').css({
        left: '-2000px'
    });;
    $(btn).children('.bar-1').css({
        transform: 'rotate(' + 45 + 'deg)',
        top: 0 + 'px',
    });
    $(btn).children('.bar-3').css({
        transform: 'rotate(' + -45 + 'deg)',
        top: -29+ 'px',
    });

    $(nav).css({
        left: '0',
    });

    $('body').addClass('stop-scrolling')


    if (count == 2) {
        count = 0;
        $('body').removeClass('stop-scrolling');
        $(btn).children('.bar-2').css({
            left: '0',
            property2: 'value2'
        });;
        $(btn).children('.bar-1').css({
            transform: 'rotate(' + 0 + 'deg)',
            top: 0 + 'px',
        });
        $(btn).children('.bar-3').css({
            transform: 'rotate(' + 0 + 'deg)',
            top: 0,
        });
        $(nav).css({
            left: '-100%',
        });
    }


}