"use strict";

var logoEl = document.getElementById('logo');
var navConainterEl = document.getElementById('navContainer');

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function(e){
    // otherwise the page will go up on click 
    e.preventDefault();
    // console.log('click hamburger');
  
    if(header.classList.contains('open')){ // Close Hamburger Menu
      header.classList.remove('open');
      
    }
    else { // Open Hamburger Menu
      header.classList.add('open');
    }  
  });

$(document).ready(function() {
    // Transition effect for navbar and back-to-top icon
    
    $(window).scroll(function() {
        // console.log($(this).scrollTop())
        // console.log($('.logo'))
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() < 600) { 
            logoEl.classList.add('hidden')
            // navConainterEl.classList.remove('boxed')
            // $('.logo').addClass('foo');
        } else {
            // $('.logo').removeClass('foo');
            logoEl.classList.remove('hidden')
            // navConainterEl.classList.add('boxed')
        }
  });
});

// const mainNavLinks = document.querySelectorAll("header__links__item a");
const mainNavLinks = document.querySelectorAll("#navContainer div a");
// const mainNavLinks = document.getElementsByClassName("header__links__item");
const mainSections = document.querySelectorAll("main section");

// console.log(mainNavLinks)
console.log(mainSections)

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    //   console.log(link)
    } else {
      link.classList.remove("current");
    }
  });
});