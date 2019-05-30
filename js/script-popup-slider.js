window.onload = function(){
  const listSlider = document.querySelector('.list-sliders'),
      itemsSlider = listSlider.children,
      fonBody = document.querySelector('#fon'),
      listBreadcrumbs = document.querySelector('.list-breadcrumbs'),
      itemsBreadcrumb = listBreadcrumbs.children,
      popup = document.querySelector('.feedback'),
      backgroundPopup = document.querySelector('.background'),
      openPopup = document.querySelector('.map-feedback'),
      closePopup = popup.querySelector('.close-up'),
      dispatchFormFeedback = popup.querySelector('.feeedback-dispatch'),
      userNamePopup = popup.querySelector('#user-name'),
      userEmailPopup = popup.querySelector('#email-feedback'),
      commentPopup = popup.querySelector('#comment');

const switchSlider = function (breadcrumbs) {
  const addSwitchSliderClick = function (breadcrumb, element, fon) {
    breadcrumb.addEventListener('click', function () {
      for (let j = 0; j < itemsSlider.length; j++) {
        if (itemsSlider[j].classList.contains('show')) {
          itemsSlider[j].classList.remove('show');
          itemsBreadcrumb[j].classList.remove('show-background-white');
        }
      }
      fonBody.classList.remove('fon-1', 'fon-shine-1', 'fon-2', 'fon-shine-2', 'fon-3', 'fon-shine-3');
      switch(fon) {
        case fon = 0: fonBody.classList.add('fon-1', 'fon-shine-1');
                    break;
        case fon = 1: fonBody.classList.add('fon-2', 'fon-shine-2');
                    break;
        case fon = 2: fonBody.classList.add('fon-3', 'fon-shine-3');
                    break;
      }   
    element.classList.add('show');
    breadcrumb.classList.add('show-background-white');
    });
  }  
      for (let i = 0; i < breadcrumbs.length; i++) {
       addSwitchSliderClick(breadcrumbs[i], itemsSlider[i], i);

  }
}  
switchSlider(itemsBreadcrumb);

  function OpenPopup () {
  openPopup.addEventListener('click', function () {
    popup.classList.add('show-popup');
    ClosePopup();
    backgroundPopup.classList.add('show-background');
  })
}
function ClosePopup () {
  closePopup.addEventListener('click', function () {
    popup.classList.remove('show-popup');
    backgroundPopup.classList.remove('show-background');
  })
}
OpenPopup ();

const workFormFeedback = function () {
  if (userNamePopup.pattern === ' ' || userNamePopup.pattern === '[0-9]') {
    userNamePopup.addEventListener('focus', function () {
    })
  }
  commentPopup.addEventListener('click', function () {
    commentPopup.value = " ";
  })
}

workFormFeedback();

}
