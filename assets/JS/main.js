const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav_toggle'),
  navClose = document.getElementById('close-nav')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show__nav')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show__nav')
  })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show__nav')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
