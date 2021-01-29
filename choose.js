const per = document.querySelector(".per");
const bus = document.querySelector(".bus");

function personal() {
  bus.classList.add("hide");
  per.classList.add("show");
}

function business() {
  bus.classList.remove("hide");
  per.classList.remove("show");
}
