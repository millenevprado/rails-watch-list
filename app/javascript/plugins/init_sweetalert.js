import swal from 'sweetalert';

const initSweetalertList = (selector, options = {}, callback = () => { }) => {
  const swalButton = document.querySelector(selector);
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal(options).then(callback); // <-- add the `.then(callback)`
    });
  }
};

const initSweetalertMovie = (selector, options = {}, callback = () => { }) => {
  const swalButtons = document.querySelectorAll(selector);
  if (swalButtons) {
    swalButtons.forEach((button) => {
      button.addEventListener('click', () => {
        swal(options).then((value) => {
          if (value) {
            const id = button.dataset.movieId;
            const link = document.querySelector('.delete-link-' + id);
            link.click();
          }
        });
      });
    })
  }
};

export { initSweetalertList, initSweetalertMovie };
