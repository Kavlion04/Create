<<<<<<< HEAD
=======
// set the modal menu element
const $targetEl = document.getElementById('modalEl');

// options with default values
const options = {
  placement: 'bottom-right',
  backdrop: 'dynamic',
  backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
  closable: true,
  onHide: () => {
      console.log('modal is hidden');
  },
  onShow: () => {
      console.log('modal is shown');
  },
  onToggle: () => {
      console.log('modal has been toggled');
  }
};

import { Modal } from 'flowbite';

/*
* $targetEl: required
* options: optional
*/
const modal = new Modal($targetEl, options);
// show the modal
modal.show();

// hide the modal
modal.hide();
// toggle the modal
modal.toggle();

// true if hidden
modal.isHidden();

// true if visible
modal.isVisible();


>>>>>>> 06b406f4d88b1b4dd572f0c58b4c08d1b7684961
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
<<<<<<< HEAD
  });
=======
  });  

>>>>>>> 06b406f4d88b1b4dd572f0c58b4c08d1b7684961
