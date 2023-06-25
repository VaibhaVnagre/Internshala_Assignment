//Below code is for when user click on Home icon or button then content will be shown on screen;
var HOME = document.getElementById("home");
HOME.addEventListener("click", HomeonClick);
var count = 0;

function HomeonClick(e) {
  e.preventDefault();

  count += 1;
  localStorage.setItem(`${count}`, "vaibhav");

  console.log("messi");

  showUseronScreen();
}

function showUseronScreen() {
  const childlist = `<p id><h1>HOME :--  a place of comfort</h1></p>`;

  var parent = document.getElementById("item");

  parent.innerHTML = childlist;

}
//--------------------------------------------------------------------------------------------------------------
//Below code is for when user click on Contact icon or button then content will be shown on screen;

var CONTACT = document.getElementById("Contact");

CONTACT.addEventListener("click", contactonclick);

function contactonclick(e) {
  e.preventDefault();
   console.log("vision")
  showUseronScreenSec();
}

function showUseronScreenSec() {
  const childSec = `<p><h1>CONTACT :-- 9307664834</h1></p>`;

  let parentSec = document.getElementById("item");

  parentSec.innerHTML = childSec;
}
//------------------------------------------------------------------------------------------------------------
//Below code is for when user click on Information icon or button then content will be shown on screen;
var Info = document.getElementById("Info");

Info.addEventListener("click", InfoOnclick);

function InfoOnclick(e) {
  e.preventDefault();
   console.log("Batman")
  showUseronScreenThird();
}

function showUseronScreenThird() {
  const childthird = `<p><h1>Information :-- My name is vaibhav nagre</h1></p>`;

  let parentThird = document.getElementById("item");

  parentThird.innerHTML = childthird;
}

//------------------------------------------------------------------------------------------------------------
//Below code is for when user click on Guide icon or button then content will be shown on screen;
var GUIDE = document.getElementById("Guide");

GUIDE.addEventListener("click", GuideOnclick);

function GuideOnclick(e) {
  e.preventDefault();
console.log("tony_stark")
  showUseronScreenFour();
}

function showUseronScreenFour() {
  const childfour = `<p><h1>Guide :-- a trusted Companion</h1></p>`;

  let parentfour = document.getElementById("item");

  parentfour.innerHTML = childfour;
}

