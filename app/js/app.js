"use strict";

const logoEl = document.getElementById('logo');
const navConainterEl = document.getElementById('navContainer');

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(event){
    event.preventDefault();
  
    if(header.classList.contains('open')){
      header.classList.remove('open');
      fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
      });
    }
    else {
      header.classList.add('open');
      fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
      });
    }  
  });

function logSubmit() {
  log.textContent = `message send.`;
}

function cleanInputs() {
  nameInput.value = '';
  mailInput.value = '';
  topicInput.value = '';
}

const form = document.getElementById('form');
const log = document.getElementById('log');

form.addEventListener('submit', function handleClick(event) {
  event.preventDefault();
  logSubmit();
  cleanInputs();
});

const nameInput = document.getElementById('name');
const mailInput = document.getElementById('mail');
const topicInput = document.getElementById('topic');


const mainNavLinks = document.querySelectorAll("#navContainer div a");
const mainSections = document.querySelectorAll("main section");


let lastId;

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  if(fromTop < 650) { 
    logoEl.classList.add('hidden')
  } else {
    logoEl.classList.remove('hidden')
  }

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