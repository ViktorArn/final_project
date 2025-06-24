// JS

// Mobile navigation toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    const menu = document.querySelector('.nav-links');
    // Toggle visibility
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
  
//Portfolio
document.addEventListener('DOMContentLoaded', () => {
  // 1) create & inject the modal
  function createLightbox(src, alt = '') {
    // build the container
    const modal = document.createElement('div');
    modal.className = 'modal';                // starts hidden
    modal.innerHTML = `
      <div class="modal-content" role="dialog" aria-modal="true">
        <button class="close" aria-label="Close">&times;</button>
        <img src="${src}" alt="${alt}">
      </div>
    `;
    document.body.appendChild(modal);

    // show it
    modal.classList.add('open');
    document.body.classList.add('modal-open');

    // close handler
    const remove = () => {
      modal.remove();
      document.body.classList.remove('modal-open');
    };

    modal.querySelector('.close').onclick = remove;
    modal.addEventListener('click', e => {
      if (e.target === modal) remove();
    });
    document.addEventListener('keyup', function esc(e) {
      if (e.key === 'Escape') {
        remove();
        document.removeEventListener('keyup', esc);
      }
    });
  }

  // 2) attach to portfolio thumbnails
  document
    .querySelectorAll('.portfolio .grid-item img')
    .forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () =>
        createLightbox(img.src, img.alt)
      );
    });
});



// Carousel images

  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselImages = document.querySelectorAll('.carousel-slide img');
 

// Buttons for carousel
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
//counter for images
let counter = 1;
const size = carouselImages[0].clientWidth;

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.style.width = size + 'px';


carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

//Button listener

nextBtn.addEventListener('click',()=>{
  if (counter >= carouselImages.length - 1)return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++ ;
  carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
})

prevBtn.addEventListener('click',()=>{
  if (counter <= 0 )return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter-- ;
  carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend' , ()=>{
  if(carouselImages[counter].id ==='lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length -2 ;
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

  }
  if(carouselImages[counter].id ==='firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter ;
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

  }
})

//carousel 2


const carouselSlide2     = document.querySelector('.carousel-slide2');
const carouselImages2    = document.querySelectorAll('.carousel-slide2 img');
const prevBtn2           = document.querySelector('#prevBtn2');
const nextBtn2           = document.querySelector('#nextBtn2');
const carouselContainer2 = document.querySelector('.carousel-container2');

// start on the “real” first slide (index 1, after the cloned last)
let counter2 = 1;

// measure from the real image
const size2 = carouselImages2[0].clientWidth;


carouselContainer2.style.width = size2 + 'px';

// jump to starting position
carouselSlide2.style.transform = `translateX(${-size2 * counter2}px)`;

// Next button
nextBtn2.addEventListener('click', () => {
  if (counter2 >= carouselImages2.length - 1) return;         // no overflow
  carouselSlide2.style.transition = 'transform 0.4s ease-in-out';
  counter2++;
  carouselSlide2.style.transform = `translateX(${-size2 * counter2}px)`;
});

// Prev button
prevBtn2.addEventListener('click', () => {
  if (counter2 <= 0) return;                                  // no underflow
  carouselSlide2.style.transition = 'transform 0.4s ease-in-out';
  counter2--;
  carouselSlide2.style.transform = `translateX(${-size2 * counter2}px)`;
});


carouselSlide2.addEventListener('transitionend', () => {
  // If we're on the cloned last slide, jump to the real last
  if (carouselImages2[counter2].id === 'lastClone2') {
    carouselSlide2.style.transition = 'none';
    counter2 = carouselImages2.length - 2;
    carouselSlide2.style.transform = `translateX(${-size2 * counter2}px)`;
  }
  //  jump to the real first
  if (carouselImages2[counter2].id === 'firstClone2') {
    carouselSlide2.style.transition = 'none';
    counter2 = 1;
    carouselSlide2.style.transform = `translateX(${-size2 * counter2}px)`;
  }
});



