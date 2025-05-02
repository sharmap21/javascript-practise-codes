'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollto = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1');
const navLink = document.querySelectorAll('.nav__link')
const navLinks = document.querySelector('.nav__links')
const nav = document.querySelector('.nav')
const operationsTabcontainer = document.querySelector('.operations__tab-container')
const operationsTabcontent = document.querySelectorAll('.operations__content')
const operationsTab = document.querySelectorAll('.operations__tab')
const slides = document.querySelectorAll('.slide')
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');



const openModal = function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=> btn.addEventListener('click',openModal)
)

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// starts
// Implementing smooth scroll:
btnScrollto.addEventListener('click',function(e){
  section1.scrollIntoView({behavior:'smooth'})
})

navLinks.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const iD = e.target.getAttribute('href');
    document.querySelector(iD).scrollIntoView({behavior:'smooth'})
  }
})

operationsTabcontainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');
  if(!clicked) return
  operationsTab.forEach(tab=>tab.classList.remove('operations__tab--active'))
  operationsTabcontent.forEach(tab=>tab.classList.remove('operations__content--active'))
  clicked.classList.add('operations__tab--active')
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).
  classList.add('operations__content--active')
})

const handleHover = function(e, opacity){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')
    siblings.forEach(el=>{
      if(el != link){
        el.style.opacity = opacity;
      }
    })
    logo.style.opacity = opacity;
  }
}

nav.addEventListener('mouseover', function(e){
  handleHover(e, 0.5)
})
nav.addEventListener('mouseout', function(e){
  handleHover(e, 1)
})

const s1Coord = section1.getBoundingClientRect()


const header = document.querySelector('.header');

const obsFun = function(entries){
  const [entry] = entries;


  if(!entry.isIntersecting){
  nav.classList.add('sticky')
  }else{
  nav.classList.remove('sticky')

  }
}

const options = {
  root: null,
  threshold: 0,
}
const observer = new IntersectionObserver(obsFun, options)
observer.observe(header)

const allSections = document.querySelectorAll('.section')

const revealSection = function(entries, observer){

  entries.forEach(entry=>{
    if(!entry.isIntersecting) return
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
  })
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

allSections.forEach(sec=>{
  sectionObserver.observe(sec)
  sec.classList.add('section--hidden')
})

const imgTargets = document.querySelectorAll('img[data-src]')


const loadImg = function(entries, observer){
  // const [entry] = entries;
  entries.forEach(entry=>{

    
    if(!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    
    entry.target.addEventListener('load',function(){
      entry.target.classList.remove('lazy-img')
    })
    observer.unobserve(entry.target)
  })
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,

})

imgTargets.forEach(img=>{
  imgObserver.observe(img)
})


const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();


  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};
slider();

