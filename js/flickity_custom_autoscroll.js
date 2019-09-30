//   Variables

let tickerSpeed = .2;

let flickity1 = null;
let flickity2 = null;
let isPaused1 = false;
let isPaused2 = false;
const slideshowEl = document.querySelector('#networks-carousel');
const slideshowE2 = document.querySelector('#shows-carousel');

//   Functions

const update1 = () => {
  if (isPaused1) return;
  if (flickity1.slides) {
    flickity1.x = (flickity1.x - tickerSpeed) % flickity1.slideableWidth;
    flickity1.selectedIndex = flickity1.dragEndRestingSelect();
    flickity1.updateSelectedSlide();
    flickity1.settle(flickity1.x);
  }
  window.requestAnimationFrame(update1);
};

const update2 = () => {
  if (isPaused2) return;
  if (flickity2.slides) {
    flickity2.x = (flickity2.x - tickerSpeed) % flickity2.slideableWidth;
    flickity2.selectedIndex = flickity2.dragEndRestingSelect();
    flickity2.updateSelectedSlide();
    flickity2.settle(flickity2.x);
  }
  window.requestAnimationFrame(update2);
};

const pause1 = () => {
  isPaused1 = true;
};

const pause2 = () => {
  isPaused2 = true;
};

const play1 = () => {
  if (isPaused1) {
    isPaused1 = false;
    window.requestAnimationFrame(update1);
  }
};

const play2 = () => {
  if (isPaused2) {
    isPaused2 = false;
    window.requestAnimationFrame(update2);
  }
};

//   Create Flickity

flickity1 = new Flickity(slideshowEl, {
  imagesLoaded: true,
  autoPlay: false,
  prevNextButtons: false,
  pageDots: false,
  draggable: true,
  wrapAround: true,
  selectedAttraction: 0.015,
  friction: 0.25
});
flickity1.x = 0;

flickity2 = new Flickity(slideshowE2, {
  imagesLoaded: true,
  autoPlay: false,
  prevNextButtons: false,
  pageDots: false,
  draggable: true,
  wrapAround: true,
  selectedAttraction: 0.015,
  friction: 0.25
});
flickity2.x = 0;

//   Add Event Listeners

slideshowEl.addEventListener('mouseenter', pause1, false);
slideshowEl.addEventListener('focusin', pause1, false);
slideshowEl.addEventListener('mouseleave', play1, false);
slideshowEl.addEventListener('focusout', play1, false);

slideshowE2.addEventListener('mouseenter', pause2, false);
slideshowE2.addEventListener('focusin', pause2, false);
slideshowE2.addEventListener('mouseleave', play2, false);
slideshowE2.addEventListener('focusout', play2, false);

flickity1.on('dragStart', () => {
  isPaused = true;
});

flickity2.on('dragStart', () => {
  isPaused = true;
});

//   Start Ticker

update1();
update2();
