"use strict";
const contactUs = document.querySelector(`.contactus`)
const contactButton = document.querySelector(`.contact`)
const overlay = document.querySelector(`.overlay`)

contactButton.addEventListener(`click`, function() {
    contactUs.classList.remove(`hidden`)
    overlay.classList.remove(`hidden`)
    console.log(`Button pressed`);
})

overlay.addEventListener(`click`, function() {
    contactUs.classList.add(`hidden`)
    overlay.classList.add(`hidden`)
    console.log(`Document pressed`);
})
