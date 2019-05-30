const buttonFiter= document.querySelector('.button-filter'),
      selectSorting = document.querySelector('#sorting'),
      listProduct = document.querySelectorAll('.list-product'),
      itemProduct = document.querySelectorAll('.item-product'),
      sliderElement = document.getElementsByClassName('numbe-track'),
      thumbRigt = document.querySelector('.numbe-thumb'),
      slideRigt = document.querySelector('#slide-right'),
      productName = document.querySelectorAll('.product-name-link');
let saleProduct = document.querySelectorAll('.product-amount');
const listFiller = document.querySelectorAll('.list-filler'),
      Shocolat = document.querySelector('#shocolat'),
      sugar = document.querySelector('#sugar'),
      fruits = document.querySelector('#fruits'),
      syrup = document.querySelector('#syrup'),
      jam = document.querySelector('#jam');

function filterCheckbox () {
  itemProduct.forEach(function (item) { 
    item.classList.remove('show');
  })
  productName.forEach(function (item, i) {
    if (Shocolat.checked){
      if(item.textContent.indexOf('шоколад') !== -1) {
        console.log('chockolat')
        itemProduct[i].classList.add('show');
      }
     }
     if (sugar.checked){
      if(item.textContent.indexOf('присып') !== -1) {
        itemProduct[i].classList.add('show');
      }
     }
     if (fruits.checked){
      if(item.textContent.indexOf('апельс') !== -1 || item.textContent.indexOf('клубнич') !== -1 || item.textContent.indexOf('бруснич') !== -1 || item.textContent.indexOf('лимон') !== -1 || item.textContent.indexOf('чернич') !== -1) {
        itemProduct[i].classList.add('show');
      }
     }
     if (syrup.checked){
      if(item.textContent.indexOf('сироп') !== -1) {
        itemProduct[i].classList.add('show');
      }
     }
     if (jam.checked){
      if(item.textContent.indexOf('джем') !== -1) {
        itemProduct[i].classList.add('show');
      }
     }
     if (jam.checked === false && syrup.checked === false && fruits.checked === false && sugar.checked === false && Shocolat.checked === false) {
      itemProduct[i].classList.add('show');
     }
  })
 


}
function filter () {
  buttonFiter.addEventListener('click', function () {

    filterCheckbox ();
    filterForCost ();
  })
}
filter ();
function filterForCost () {
  let curent = 0;
  for (let i = 0; i < itemProduct.length - 2; i++){
  let min = itemProduct[i].querySelector('.product-amount').textContent;
  console.log("перебор элементов" + min);
  curent++;
  for (let j = curent; j < itemProduct.length - 1; j++) {
    if (min >= itemProduct[j].querySelector('.product-amount').textContent) {
        min = itemProduct[j].querySelector('.product-amount').textContent;
        console.log('min!' + min);
        let swep = itemProduct[i];
        console.log(itemProduct);
        itemProduct[i] = itemProduct[j];
        itemProduct[j] = swep;
        console.log(itemProduct);
    } else {
      console.log("все также" + min);
    }
}
  }
}
  


console.log();

/*
function filterCatalog () {
    let curent = 0;
    for (let i = 0; i < itemProduct.length - 2; i++) {
      let minSale = +itemProduct[i].querySelector('.product-amount').textContent; 
      curent++; 
    for (let j = curent; j < itemProduct.length - 1; j++) {
        if (minSale > +itemProduct[j].querySelector('.product-amount').textContent) {
            console.log('min!');
            minSale = +itemProduct[j].querySelector('.product-amount').textContent;
            let swep = itemProduct[i];
            itemProduct[i] = itemProduct[j];
            itemProduct[j] = swep;
        }
        
    }
    console.log(itemProduct);
      console.log(minSale);
    }
    console.log(itemProduct.length);
    console.log(itemProduct);
    console.log(saleProduct);
    function sorting () {
      let itemSorting = selectSorting.options[selectSorting.selectedIndex].value;
      console.log(itemSorting);
     
      switch(itemSorting) {
          case itemSorting = 'Сначала дорогие': console.log('ok');
          break;
          case itemSorting = 'Сначала недорогие': break;
          case itemSorting = 'по жирности': break;

      }
    }
    
    sorting();
    
}

buttonFiter.addEventListener('click', function (evt) {
    evt.preventDefault;
    filterCatalog ();
})

  const slider = new Slider({
   element: sliderElement,
   max: 500
  })
  sliderElement.addEventListener('slide', function(event) {
    slideRigt.textContent = event.detail;
  })
*/