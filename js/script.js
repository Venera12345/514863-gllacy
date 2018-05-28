var first = document.querySelector(".first-breadcrumb")
var second = document.querySelector(".second-breadcrumb")
var third = document.querySelector(".third-breadcrumb")
var fon = document.querySelector(".fon")
var active = document.querySelector(".active")
var oneSlider = document.querySelector(".one")
var twoSlider = document.querySelector(".two")
var threeSlider = document.querySelector(".three")


second.addEventListener("click", function () {
  fon.classList.remove("fon-1");
  fon.classList.remove("fon-3");
  fon.classList.add("fon-2");
  first.classList.remove("active");
  third.classList.remove("active");
  second.classList.add("active");
  twoSlider.classList.add("show");
  oneSlider.classList.remove("show");
  threeSlider.classList.remove("show");
});

third.addEventListener("click", function () {
  fon.classList.remove("fon-2");
  fon.classList.remove("fon-1");
  fon.classList.add("fon-3");
  first.classList.remove("active");
  second.classList.remove("active");
  third.classList.add("active");
  twoSlider.classList.remove("show");
  oneSlider.classList.remove("show");
  threeSlider.classList.add("show");
});

first.addEventListener("click", function () {
  fon.classList.remove("fon-2");
  fon.classList.remove("fon-3");
  fon.classList.add("fon-1");
  third.classList.remove("active");
  second.classList.remove("active");
  first.classList.add("active");
  oneSlider.classList.add("show");
  twoSlider.classList.remove("show");
  threeSlider.classList.remove("show");
});

var FeedbackBtn = document.querySelector(".map-feedback")
var feedback = document.querySelector(".feedback")
var background = document.querySelector(".background")
var close = document.querySelector(".close-up")
var userName = feedback.querySelector("[name=user-name]")
var send = feedback.querySelector("form")
var email = feedback.querySelector("[name=email]")
var comment = feedback.querySelector("[name=comment]")
var storage = localStorage.getItem("userName")
var isStorageSupport = true

FeedbackBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("show");
  background.classList.add("show-background");
  feedback.classList.remove("error");
  userName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("show");
  background.classList.remove("show-background");
});

send.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !comment.value) {
      evt.preventDefault();
      feedback.classList.add("error");
  }
  else {
    if (isStorageSupport){
      localStorage.setItem("userName", userName.value)
    }
  }

});
