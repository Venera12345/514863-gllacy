(function () {

  var slides = Array.from(document.querySelector('.list-sliders').children);

  console.log(slides)

  var search = document.querySelector('.search');
  var searchButton = search.querySelector('.search-button');
  var searchForm = search.querySelector('.search-form');

  var sign = document.querySelector('.sign');
  var signButton = sign.querySelector('.sign-button');
  var signForm = sign.querySelector('.sign-form');

  var feedbackButton = document.querySelector('.map-feedback');
  var feedbackForm = document.querySelector('.feedback');
  var feedbackClose = feedbackForm.querySelector('.close-up');

  searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    searchForm.classList.toggle('search-form--active');
  });
  signButton.addEventListener('click', function(event) {
    event.preventDefault();
    signForm.classList.toggle('sign-form--active');
  });
  feedbackButton.addEventListener('click', function(event) {
    event.preventDefault();
    feedbackForm.classList.add('feedback--active');
  });
  feedbackClose.addEventListener('click', function(event) {
    event.preventDefault();
    feedbackForm.classList.remove('feedback--active');
  });

  slidr.create('slidr-ul', {
    breadcrumbs: true,
    transition: 'fade',
    controls: 'none',
    after: function() {
      var currentSlide = null;
      slides.forEach(function(item, i) {
        if (item.style.visibility === 'visible') {
          currentSlide = i + 1;
          console.log(currentSlide)
        }
      });
      document.body.className = 'fon-' + currentSlide;
    }
  }).start();
  
})();

