const per1=document.querySelector('.per');
const bus1=document.querySelector('.bus');
const choose=document.querySelector('.choose');
const details=document.querySelector('.details');


function personal()
{
  bus.classList.add('hide');
per.classList.add('show');
}

function business()
{
  bus.classList.remove('hide');
per.classList.remove('show');
}
let photo=document.querySelector('.pho');
let det=document.querySelector('.det');
function adphoto()
{
  console.log("i am called");
  det.classList.remove("display");
  console.log("i sm calldfj");
  photo.classList.add("display");

}
function cancle()
{
  photo.classList.remove('display');
  det.classList.add("display");

}
// window.location.replace("registration.html");