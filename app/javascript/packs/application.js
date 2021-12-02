// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External imports
import 'bootstrap';

// Internal imports
import { loadDynamicBannerText } from '../components/banner';
import { initSweetalertList, initSweetalertMovie } from '../plugins/init_sweetalert';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  // [...]
  loadDynamicBannerText();
  initSweetalertList('#sweet-alert-list', {
    title: "Are you sure you want to delete this list?",
    text: "This action cannot be reversed",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }, (value) => {
    if (value) {
      const link = document.querySelector('#delete-list-link');
      link.click();
    }
  });

  initSweetalertMovie('.sweet-alert-movie', {
    title: "Are you sure you want to delete this movie?",
    text: "This action cannot be reversed",
    icon: "warning",
    buttons: true,
    dangerMode: true
  });
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
