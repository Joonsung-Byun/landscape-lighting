const hb = document.querySelector('#hamburgerBtn');
hb.addEventListener('click', ()=> {
  document.querySelector('#primaryNav').classList.toggle('open')
})



const swiper = new Swiper('.swiper', {

  loop: true,
  effect: 'slide',
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay:2000,
  },
});


console.log('Im connected')
const rightNow = new Date()
console.log(rightNow.getFullYear())



