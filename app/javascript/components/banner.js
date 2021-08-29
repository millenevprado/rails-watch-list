import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Save your favorite movies"],
    typeSpeed: 70,
    loop: true
  });
}

export { loadDynamicBannerText };
