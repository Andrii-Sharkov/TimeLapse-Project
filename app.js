const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;  

// Header
const logo = this.document.querySelector('.logo');
const navLinks = document.querySelectorAll('.nav-link');
// console.log(navItems);
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header-container');
  header.classList.toggle('sticky', window.scrollY > 0);
  if(this.scrollY > 0) {
    logo.style.color = 'white';
    navLinks.forEach( (link) => {
      link.style.color = 'white';
    });
  }
  if(!scrollY) {
    logo.style.color = 'black';
    navLinks.forEach( (link) => {
      link.style.color = 'black';
    });
  }
});

window.addEventListener('scroll', buttonUp);
function buttonUp () {
  const btnUp = document.querySelector('.btn-up');
  if(scrollY > 500) {
    btnUp.style.transform = 'translateY(0px)';
  } else {
    btnUp.style.transform = 'translateY(100px)';
  }
}