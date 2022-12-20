/* Interaction */
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

/* Frontend */
let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', shake)
frontend.addEventListener('animationend', shake)

function shake() {
  frontend.classList.toggle('shake')
}

/* Design */
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click' , slide)
design.addEventListener('Animation', slide)

function slide() {
  design.classList.toggle('slide')
}

/* And */
let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('click' , rotate)
and.addEventListener('Animation', rotate)


function rotate() {
  and.classList.toggle('rotate')
}

/* Development */
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click' , larger)
development.addEventListener('Animation', larger)


function larger() {
  development.classList.toggle('larger')
}


/* Sprint-5, Fade */
let sprint5 =document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('click', fade)
sprint5.addEventListener('Animation', fade)

function fade() {
  sprint5.classList.toggle('fade')
}


/* Fix, Round */
// let round = document.querySelector('a:nth-of-type(6)')

// fix.addEventListener ('click', round)
// fix.addEventListener ('Animation', round)

// function round() {
//   round.classList.toggle('round')
// }
