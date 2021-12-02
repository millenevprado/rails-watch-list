import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  const banner = document.getElementById('banner-typed-text');
  if (banner) {
    return new Typed('#banner-typed-text', {
      strings: ["Save your favorite movies"],
      typeSpeed: 70,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
