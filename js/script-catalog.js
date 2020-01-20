window.addEventListener("load", function () {
  var btnMenu = document.querySelector('.btn-menu'),
    listMenu = document.querySelector('.list-menu'),
    itemMenu = document.querySelector('.item-menu'),
    searchButton = document.querySelector('.search-button'),
    searchForm = document.querySelector('.search-form'),
    signButton = document.querySelector('.sign-button'),
    signForm = document.querySelector('.sign-form'),
    closeUpForm = document.querySelectorAll('.close-up-form'),
    backgroundPopup = document.querySelector('.background'),
    listProducts = document.querySelector('.list-products'),
    imgProduct = listProducts.querySelectorAll('.img-product'),
    amoutProduct = listProducts.querySelectorAll('.product-amount'),
    nameProduct = listProducts.querySelectorAll('.product-name'),
    templateCard = document.querySelector('#cart-product-description').content,
    templateProduct = templateCard.querySelector('.background-position-popup'),
    buttonQuickView = document.querySelectorAll('.Quick-View'),
    crumbBasket = document.querySelector('.basket-text'),
    conteinerBasket = document.querySelector('.basket-conteiner'),
    conteinerOrder = document.querySelector('.order'),
    listOrder = document.querySelector('.list-order'),
    templateOrder = document.querySelector('#item-order-create').content,
    basketSlogan = document.querySelector('.slogan-add'),
    orderTotal = document.querySelector('.order-totals');

  btnMenu.addEventListener('click', function () {
    listMenu.classList.toggle('show');
  })
  searchButton.addEventListener('click', function () {
    searchForm.style.display = 'block';
  })
  signButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    signForm.style.display = 'block';
  })

  buttonQuickView.forEach(function (btn, i) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      activCart(i);
    })
  })

  function activCart(num) {
    var item = templateProduct.cloneNode(true),
      img = item.querySelector('.img-product-description'),
      name = item.querySelector('.product-name'),
      price = item.querySelector('.product-amount-cart'),
      addBasket = item.querySelector('.add-basket'),
      weight = item.querySelector('#weight');
    img.src = imgProduct[num].src;
    img.alt = nameProduct[num].textContent;
    name.textContent = nameProduct[num].textContent;
    price.textContent = +amoutProduct[num].textContent;

    var objectProduct = {
      name: name.textContent,
      src: img.src,
      price: price.textContent
    };

    closeCart(item);
    addItemBasket(item);
    listProducts.appendChild(item);
    backgroundPopup.classList.add('show-background');
    return item;

    function addItemBasket(item) {
      addBasket.addEventListener('click', function () {
        var calcCost = item.querySelector('.cost-calculation').textContent;
        if (calcCost != 0) {
          item.remove();
          backgroundPopup.classList.remove('show-background');
          var quantityKil = weight.options[weight.selectedIndex].value;
          conteinerBasket.classList.add('polygon-active');

          creatItem(objectProduct, quantityKil);

          return objectProduct;
        }
      })
    }
  }

  function creatItem(object, weight) {
    var element = templateOrder.cloneNode(true),
      pictureOrder = element.querySelector('.img-order'),
      nameOrder = element.querySelector('.name-order'),
      quantityOrder = element.querySelector('.order-quantity'),
      priceOrder = element.querySelector('.order-price'),
      costOrder = element.querySelector('.order-amount');

    pictureOrder.src = object.src;
    nameOrder.textContent = object.name;
    quantityOrder.textContent = weight;
    priceOrder.textContent = object.price;
    var costCalc = parseInt(object.price, 10) * +weight;
    costOrder.textContent = costCalc;
    listOrder.appendChild(element);
    var itemOrder = listOrder.querySelectorAll('.item-order');
    for (var i = 0; i < itemOrder.length; i++) {
      if (itemOrder.length = 0) {
        crumbBasket.textContent = 'Пусто';
      }
      if (itemOrder.length = 1) {
        crumbBasket.textContent = '1 товар';
      }
      if (itemOrder.length > 1) {
        crumbBasket.textContent = itemOrder.length + ' товара';
      }
    }

  }

  function closeCart(item) {
    var closeCart = item.querySelector('.close-up');
    closeCart.addEventListener('click', function () {
      item.remove();
      backgroundPopup.classList.remove('show-background');

    })
  }

  function OpenBasket() {
    conteinerBasket.addEventListener('click', function () {
      var itemsOrder = listOrder.children;
      var amountOrder = listOrder.querySelectorAll('.order-amount');
      var closeItem = listOrder.querySelectorAll('.close-up');
      var sumTot = 0;
      for (var i = 0; i < itemsOrder.length; i++) {
        if (itemsOrder.length > 0) {
          basketSlogan.classList.add('slogan-hidden');
          orderTotal.classList.add('order-totals-show');
          sumTot += +amountOrder[i].textContent;
        }
        closeItems(closeItem[i], itemsOrder[i], amountOrder[i].textContent);
      }
      var calcTotal = orderTotal.querySelector('.totals-amount');
      calcTotal.textContent = sumTot;
      var sumNew = sumTot;

      function closeItems(close, item, amount) {
        close.addEventListener('click', function () {
          item.remove();
          sumNew = sumNew - amount;
          calcTotal.textContent = sumNew;
          for (var j = 0; j <= itemsOrder.length; j++) {
            if (itemsOrder.length <= 0) {
              crumbBasket.textContent = 'Пусто';
              basketSlogan.classList.remove('slogan-hidden');
              orderTotal.classList.remove('order-totals-show');
              conteinerBasket.classList.remove('polygon-active');
            } else if (itemsOrder.length = 1) {
              crumbBasket.textContent = '1 товар';
            } else if (itemsOrder.length > 1) {
              crumbBasket.textContent = itemsOrder.length + ' товара';
            }
          }
        })
      }
      conteinerOrder.classList.toggle('order-show');
      return;
    })
  }
  OpenBasket();
  closeUpForm.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      switch (i) {
        case i = 0:
          searchForm.style.display = 'none';
          break;
        case i = 1:
          signForm.style.display = 'none';
          break;
        case i = 2:
          conteinerOrder.classList.remove('order-show');
          break;
      }
    })
  })



});