(function () {

  var slides = Array.prototype.slice.call(document.querySelector('.list-sliders').children);
  var feedbackButton = document.querySelector('.map-feedback');
  var feedbackForm = document.querySelector('.feedback');
  var feedbackClose = feedbackForm.querySelector('.close-up');

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
  var dotted = document.querySelector('#slidr-ul-breadcrumbs');
  dotted.classList.add('slider-dotted');
  var dotted = document.querySelector('.slidr-breadcrumbs');
  for(var i = 0; i < dotted.children.length; i++) {
    dotted.children[i].style.width = 16 + 'px';
    dotted.children[i].style.height = 16 + 'px';
    dotted.children[i].style.marginTop = 40 + 'px';
    dotted.children[i].style.marginLeft = 4 + 'px';
    dotted.children[i].style.marginBottom = 4 + 'px';
    dotted.children[i].style.marginRigth = 4 + 'px';
    dotted.children[i].style.borderWidth = 2 + 'px';
  }
  var list = document.querySelector('.list-sliders');
  list.style.overflow = 'visible';

})();

