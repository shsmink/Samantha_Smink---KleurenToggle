const toggleMenu = document.querySelector(".menu__icon");
const showMenu = document.querySelector(".menu__items");

toggleMenu.addEventListener("mouseover", function(){
  showMenu.classList.toggle("open-menu")
});

const bodyBackground = document.querySelector("body");

const changeToGrey = document.querySelector(".background__grey");
const changeToRed = document.querySelector(".background__red");
const changeToOrange = document.querySelector(".background__orange");
const changeToPurple = document.querySelector(".background__purple");
const changeToGreen = document.querySelector(".background__green");

changeToGrey.addEventListener("click", function(){
  bodyBackground.classList.remove("background__red")
  bodyBackground.classList.remove("background__orange")
  bodyBackground.classList.remove("background__purple")
  bodyBackground.classList.remove("background__green")
  bodyBackground.classList.toggle("background__grey")
});

changeToRed.addEventListener("click", function(){
  bodyBackground.classList.remove("background__grey")
  bodyBackground.classList.remove("background__orange")
  bodyBackground.classList.remove("background__purple")
  bodyBackground.classList.remove("background__green")
  bodyBackground.classList.toggle("background__red")
});

changeToOrange.addEventListener("click", function(){
  bodyBackground.classList.remove("background__grey")
  bodyBackground.classList.remove("background__red")
  bodyBackground.classList.remove("background__purple")
  bodyBackground.classList.remove("background__green")
  bodyBackground.classList.toggle("background__orange")
});

changeToPurple.addEventListener("click", function(){
  bodyBackground.classList.remove("background__grey")
  bodyBackground.classList.remove("background__red")
  bodyBackground.classList.remove("background__orange")
  bodyBackground.classList.remove("background__green")
  bodyBackground.classList.toggle("background__purple")
});

changeToGreen.addEventListener("click", function(){
  bodyBackground.classList.remove("backgroundcolor__grey")
  bodyBackground.classList.remove("backgroundcolor__red")
  bodyBackground.classList.remove("backgroundcolor__orange")
  bodyBackground.classList.remove("backgroundcolor__purple")
  bodyBackground.classList.toggle("backgroundcolor__green")
});