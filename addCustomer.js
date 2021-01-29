function isNumber(evt) {
  console.log("st");
  var ch = String.fromCharCode(evt.which);
  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}
let photo = document.querySelector(".photo");
let add = document.querySelector(".add");
function adphoto() {
  photo.classList.add("display");
  add.classList.remove("display");
}
function cancle() {
  photo.classList.remove("display");
  add.classList.add("display");
}
function addcontact() {
  window.location.href = "homePage.html";
}
