window.addEventListener("load", function () {
  var buttonFiter = document.querySelector('.button-filter'),
    selectSorting = document.querySelector('#sorting'),
    listProduct = document.querySelectorAll('.list-product'),
    itemProduct = document.querySelectorAll('.item-product'),
    sliderElement = document.getElementsByClassName('numbe-track'),
    thumbRigt = document.querySelector('.numbe-thumb'),
    slideRigt = document.querySelector('#slide-right'),
    productName = document.querySelectorAll('.product-name-link');
  var saleProduct = document.querySelectorAll('.product-amount');
  var listFiller = document.querySelectorAll('.list-filler'),
    Shocolat = document.querySelector('#shocolat'),
    sugar = document.querySelector('#sugar'),
    fruits = document.querySelector('#fruits'),
    syrup = document.querySelector('#syrup'),
    jam = document.querySelector('#jam');

  function filter() {
    buttonFiter.addEventListener('click', function () {
      filterCheckbox();
      //filterCost ();
      // filterForCost ();
    })
  }
  filter();

  /*Slider */
  function Slider() {
    $("#slider-range").slider({
      range: true,
      min: 100,
      max: 800,
      values: [200, 500],
      slide: function (event, ui) {
        $("#amount").val(ui.values[0] + " руб. - " + ui.values[1] + " руб.");
      },
      stop: function (event, ui) {
        $("#slider-range").slider({
          values: [ui.values[0], ui.values[1]]
        })
      }
    });
    $("#amount").val($("#slider-range").slider("values", 0) +
      " руб. - " + $("#slider-range").slider("values", 1) + " руб.");

  };
  Slider();

  function filterCheckbox() {
    itemProduct.forEach(function (item) {
      item.classList.remove('show');
    })
    productName.forEach(function (item, i) {
      if (Shocolat.checked) {
        if (item.textContent.indexOf('шоколад') !== -1) {
          itemProduct[i].classList.add('show');
        }
      }
      if (sugar.checked) {
        if (item.textContent.indexOf('присып') !== -1) {
          itemProduct[i].classList.add('show');
        }
      }
      if (fruits.checked) {
        if (item.textContent.indexOf('апельс') !== -1 || item.textContent.indexOf('клубнич') !== -1 || item.textContent.indexOf('бруснич') !== -1 || item.textContent.indexOf('лимон') !== -1 || item.textContent.indexOf('чернич') !== -1) {
          itemProduct[i].classList.add('show');
        }
      }
      if (syrup.checked) {
        if (item.textContent.indexOf('сироп') !== -1 || item.textContent.indexOf('подлив') !== -1) {
          itemProduct[i].classList.add('show');
        }
      }
      if (jam.checked) {
        if (item.textContent.indexOf('джем') !== -1) {
          itemProduct[i].classList.add('show');
        }
      }
      if (jam.checked === false && syrup.checked === false && fruits.checked === false && sugar.checked === false && Shocolat.checked === false) {
        itemProduct[i].classList.add('show');
      }
    })
  }
});