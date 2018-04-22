$('#open-popup').magnificPopup({
    items: [
		{
        src: 'img/work/petronius1926/petronius1926.jpg',
        title: 'Home Page'
      },
      {
        src: 'img/work/petronius1926/about.png',
        title: 'About Page'
      },
      {
		src: 'img/work/petronius1926/proudct-page.png',
        title: 'Products Page'
      },
      {
        src: 'img/work/petronius1926/product-page-filter.png', // HTML string
        title: 'Products Page with filter'
      },
      {
        src: 'img/work/petronius1926/single-product.png', // CSS selector of an element on page that should be used as a popup
        title: 'Single Products Page '
	},
      {
        src: 'img/work/petronius1926/menu.png', // CSS selector of an element on page that should be used as a popup
        title: 'menu '
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});


$('#gadji').magnificPopup({
    items: [
		{
        src: 'img/work/gadji/home.png',
        title: 'Home Page'
      },
      {
        src: 'img/work/gadji/About.jpg',
        title: 'About Page'
      },
      {
		src: 'img/work/gadji/Gallery.jpg',
        title: 'Gallery Page'
      },
      {
        src: 'img/work/gadji/work.jpg', // HTML string
        title: 'work Page '
      },
      {
        src: 'img/work/gadji/menu.png', // CSS selector of an element on page that should be used as a popup
        title: 'Menu Page '
	},
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});


// $('.gallery').each(function() { // the containers for all your galleries
//     $(this).magnificPopup({
//         delegate: 'img', // the selector for gallery item
//         type: 'image',
//         gallery: {
//           enabled:true
//         }
//     });
// });
