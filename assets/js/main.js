/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector('.details__img'),
  smallImg = document.querySelector('.details__small-img');

  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src;
    });
  });
}

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper('.categories__container', {
    spaceBetween: 24,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        576:{
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
});

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper('.new__container', {
    spaceBetween: 24,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
});
/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active-tab');
        });

        target.classList.add('active-tab');

        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
        });

        tab.classList.add('active-tab');
    });
});


// Get all tabs and tab contents
// const tabs = document.querySelectorAll('.account__tab');
// const tabContents = document.querySelectorAll('.tab__content');

// // Add click event listeners to each tab
// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     // Remove 'active-tab' class from all tabs
//     tabs.forEach(item => item.classList.remove('active-tab'));
//     // Add 'active-tab' class to the clicked tab
//     tab.classList.add('active-tab');

//     // Hide all tab contents
//     tabContents.forEach(content => content.style.display = 'none');

//     // Get the target content based on data-target attribute
//     const targetId = tab.getAttribute('data-target');
//     const targetContent = document.querySelector(targetId);

//     // Display the target content
//     if (targetContent) {
//       targetContent.style.display = 'block';
//     }
//   });
// });


const updateProfileForm = document.querySelector('#update-profile form');

updateProfileForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission for this example

  // Get the input value
  const username = updateProfileForm.querySelector('.form__input').value;

  // Here, you can send this data to the server using fetch or any AJAX method
  // For demonstration, let's log the username
  console.log('Updated username:', username);

  // You can add fetch or AJAX code here to send the form data to the server
});

