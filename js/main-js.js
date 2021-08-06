'use strict';

const htmlElem = document.querySelector('html');
const bodyElem = document.querySelector('body');
const headerElem = document.querySelector('header');

const openNav = document.querySelector('.m_header');
const openSubBtn = document.querySelector('.m-menu_btn');
const closeSubBtn = document.querySelector('.m-menu_close');
const msubNav = document.querySelector('.m-menu');
const mSubItem = msubNav.querySelectorAll('.menu_item');

const search= document.querySelector('.search');
const btnSearch = document.querySelector('.search_open');
const btnCloseSearch = document.querySelector('.search_close');

let current = 0;
let slides = document.querySelectorAll('.slide');
const dot = document.querySelectorAll('.pager');
const wave = document.querySelectorAll('.wave');
const fadeIn = document.querySelectorAll('.visual_text > p');

window.addEventListener('scroll', scrollWork);
btnSearch.addEventListener('click', openSearch);
btnCloseSearch.addEventListener('click', closeSearch);
openSubBtn.addEventListener('click', clickOpen);
closeSubBtn.addEventListener('click', clickClose);

//검색
function openSearch(ev) {
  ev.preventDefault();
  bodyElem.classList.add('search_open');
  search.classList.add('active');
}
function closeSearch(ev) {
  ev.preventDefault();
  bodyElem.classList.remove('search_open');
  search.classList.remove('active');
}


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

//m-subopen
for (let subitem of mSubItem) {
  subitem.addEventListener('click', function(ev) {
    ev.preventDefault();
    if (!subitem.classList.contains('on')) subitem.classList.add('on');
    else if(subitem.classList.contains('menu_item', 'on')) {
      subitem.classList.remove('on')
    }
  });
}