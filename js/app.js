const menu = document.querySelector('.menu');
const icon = document.querySelector('.icons');
const toggle = document.querySelector('.navbar__toggleBtn')

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
});

// const navSlide = () => {
//   const bi  = document.querySelector('.bi');
//   const nav = document.querySelector('.nav-links');

//   const navLinks = document.querySelectorAll('.nav-links li');

//   bi.addEventListener('click',()=>{
//     // Toggle nav
//     nav.classList.toggle('nav-active');

//     // Animaate links
//     navLinks.forEach((link, index)=>{
//       if( link.style.animation ) {
//         link.style.animation = '';
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.3 }s`;
//       }
//     });
//     // Bi Animation
//     bi.classList.toggle('toggle');

//   });
// }

// navSlide();

// function move() {
//   location.href='../html/discography.html'
// }