const splash = document.querySelector(".splash");
const welcome = document.querySelector(".welcome");
const moneytransfer = document.querySelector(".moneytransfer");
const safeandsecure = document.querySelector(".safeandsecure");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    console.log("settimeoit called");
    splash.classList.add("displayNone");
  }, 2000);
});
document.getElementById("nxt").addEventListener("click", next);

function next() {
  console.log("settimeoit called");
  welcome.classList.add("displayNone");
  moneytransfer.classList.add("display");
}
document.getElementById("nxt1").addEventListener("click", next1);
function next1() {
  console.log("settimeoit called");
  welcome.classList.add("displayNone");
  moneytransfer.classList.remove("display");
  safeandsecure.classList.add("display");
}
document.getElementById("nxt2").addEventListener("click", nextp);
function nextp() {
  window.location.replace("signIn.html");
}
