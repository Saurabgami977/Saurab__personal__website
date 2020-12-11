// CSS manipulation on page load
function animate() {
    document.querySelector('#navUl').style.transform = 'translateX(0px)';
    document.querySelector('.logo').style.transform = 'translateX(0px)';
    document.querySelector('.myIntro').style.transform = 'translateX(0px)';
    document.querySelector('.myName').style.transform = 'translateX(0px)';
    document.querySelector('.banner-btn').style.transform = 'translateX(0px)';
    document.querySelector('.topNavbar').style.right = '-500px';
}


// change navbar background color on scroll.
document.addEventListener('scroll', (e) => {
    let ScrollPosition = window.scrollY;
    if (ScrollPosition >= 600) {
        document.querySelector('.header').style.background = 'rgba(0, 150, 136, 0.8)';
    } else {
        document.querySelector('.header').style.background = 'transparent';
    }
})

// hamBurger menu toggle
function hamburger(x) {
    x.classList.toggle('change');
    if (x.classList.contains('change')) {
        document.querySelector('.topNavbar').style.right = '0';
    } else {
        document.querySelector('.topNavbar').style.right = '-500px';
    }
}

document.querySelectorAll('.menu').forEach(element => {
    element.addEventListener('click', () => {
        document.getElementById('hamBurger').classList.toggle('change')
        document.querySelector('.topNavbar').style.right = '-500px';
    })
})