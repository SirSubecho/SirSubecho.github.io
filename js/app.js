"use strict";

const logoEl = document.getElementById('logo');
const navConainterEl = document.getElementById('navContainer');

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(e){
    // otherwise the page will go up on click 
    e.preventDefault();
  
    if(header.classList.contains('open')){ // Close Hamburger Menu
      header.classList.remove('open');
      fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
      });
    }
    else { // Open Hamburger Menu
      header.classList.add('open');
      fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
      });
    }  
  });

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() < 600) { 
            logoEl.classList.add('hidden')
        } else {
            logoEl.classList.remove('hidden')
        }
  });
});




const mainNavLinks = document.querySelectorAll("#navContainer div a");
const mainSections = document.querySelectorAll("main section");

console.log(mainSections)

let lastId;
// let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});