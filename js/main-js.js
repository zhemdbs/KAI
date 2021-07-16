
//슬라이드
var current = 0;
var slides = document.querySelectorAll('.slide');
var dot = document.querySelectorAll('.pager');

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    dot[i].classList.remove('on');
    }
  current = (current != slides.length -1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
  dot[current].classList.add('on');
}, 6000);



//스크롤 header
const htmlElem = document.querySelector('html');
const headerElem = document.querySelector('header');
window.addEventListener('scroll', scrollWork);
function scrollWork() {
    let sTop = htmlElem.scrollTop;
    if (sTop > 50) {
        headerElem.classList.add('on');
    } else if (sTop < 50) {
        headerElem.classList.remove('on');
    }
    if (sTop > 650) {
        headerElem.classList.add('active');
    } else if (sTop < 650) {
        headerElem.classList.remove('active');
    }
    console.log(sTop)
}
