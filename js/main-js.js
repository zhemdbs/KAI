'use strict';

const htmlElem = document.querySelector('html');
const headerElem = document.querySelector('header');
const openNav = document.querySelector('.m_header');
const openSub = document.querySelector('.m-menu_btn');
const closeSub = document.querySelector('.m-menu_close');

let current = 0;
let slides = document.querySelectorAll('.slide');
const dot = document.querySelectorAll('.pager');
const wave = document.querySelectorAll('.wave');
const fadeIn = document.querySelectorAll('.visual_text > p');

window.addEventListener('scroll', scrollWork);
openSub.addEventListener('click', clickOpen);
closeSub.addEventListener('click', clickClose);
btnSearch.addEventListener('click', openSearch);
btnCloseSearch.addEventListener('click', CloseSearch);


//스크롤
function scrollWork() {
    let sTop = htmlElem.scrollTop;
    if (sTop > 50) {
        headerElem.classList.add('on');
    } else if (sTop < 50) {
        headerElem.classList.remove('on');
    }
    if (sTop > 550) {
        headerElem.classList.add('active');
    } else if (sTop < 550) {
        headerElem.classList.remove('active');
    }
    console.log(sTop)
}

//슬라이드
setInterval(function() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        fadeIn[i].classList.remove('on');
        dot[i].classList.remove('on');
        wave[i].classList.remove('on');
        }
    current = (current != slides.length -1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
    fadeIn[current].classList.add('on');
    dot[current].classList.add('on');
    wave[current].classList.add('on');
}, 6000);

//슬라이드 텍스트
waveText();
function waveText() {
    let anis = document.querySelectorAll(".wave");

    anis.forEach(function (item) {
        let delayTime = 0;
        let aniTexts = item.textContent;
        item.textContent = "";

        for (let i = 0; i < aniTexts.length; i++) {
            let aniText = aniTexts.substring(i, i + 1);
            let newSpan = document.createElement("span");
            if (aniText === " ") {
            aniText = "&nbsp;";
            }
            newSpan.innerHTML = aniText;
            delayTime = delayTime + (0.7 / aniTexts.length);
            newSpan.style.animationDelay = delayTime + "s";
            item.appendChild(newSpan);
        }
    });    
}

//m-openNav 
function clickOpen() {
    openNav.classList.add('on');
}
function clickClose() {
    openNav.classList.remove('on');
}
