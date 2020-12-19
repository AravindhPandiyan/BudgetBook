var id2 = location.search.substring(0);
var id3=id2.slice(1,);
function youGotCard()
{
  window.location.href="you gave.html?"+id3;
}
function youGiveCard()
{
  window.location.href="you got.html?"+id3;
  
}

function transactionDetails() {
  let newTransaction=document.createElement("div");

  newTransaction.setAttribute("class",'YouGave');
  newTransaction.innerHTML='<div class="text">You Gave<div class="inr" style="color:red">&#8377;</div></div><div class="laal"></div>';
  document.querySelector(".TD").appendChild(newTransaction);
}
function overlay() {
  let overlay = document.querySelector('.overlay');
  if(overlay.style.display == "block") {
      overlay.style.display = "none";
  } else {
      overlay.style.display = "block";
  }
}

function dOverlay() {
  let overlay = document.querySelector('.dOverlay');
  if(overlay.style.display == "block") {
      overlay.style.display = "none";
  } else {
      overlay.style.display = "block";
  }
}

function newphoto()
{
  var id = location.search.substring(0);
  var id1 = id.slice(1);
window.location.href="photo.html?"+id1;
}

