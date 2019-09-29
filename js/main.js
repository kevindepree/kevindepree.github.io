var elem = document.querySelector('#networks-carousel');
var flkty = new Flickity( elem, {
// options
cellAlign: 'left',
contain: true,
// disable previous & next buttons and dots
prevNextButtons: false,
pageDots: false,
groupCells: true,
autoPlay: true,
selectedAttraction: 0.01,
friction: 0.8,
autoPlay: 4500
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '#networks-carousel', {
// options
});

var elem = document.querySelector('#shows-carousel');
var flkty = new Flickity( elem, {
// options
cellAlign: 'left',
contain: true,
// disable previous & next buttons and dots
prevNextButtons: false,
pageDots: false,
groupCells: true,
autoPlay: true,
selectedAttraction: 0.01,
friction: 0.8,
autoPlay: 4500
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '#shows-carousel', {
// options
});
