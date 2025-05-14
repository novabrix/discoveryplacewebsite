"use strict";
const contactUs = document.querySelector(`.contactus`)
const contactButton = document.querySelector(`.contact`)
const overlay = document.querySelector(`.overlay`)
const phoneNumberBottom = document.querySelectorAll(`.phonenumber`)
const emailAddress = document.querySelectorAll(`.email`)
const credits = document.querySelector(`.credits-bar`)
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
const phoneNumber = `612-242-3440`
const email = `yusufayuub00@gmail.com`

console.log(phoneNumberBottom);
for (const i of phoneNumberBottom) {
    i.textContent = `Phone Number: ${phoneNumber}`
}
for (const i of emailAddress) {
    i.textContent = `Email Address: ${email}`
}

credits.textContent = `Made by Ayuub and Idriis Yusuf.`