// this is for adding customer.
function addCustomer() {
  window.location.href = "addCustomer.html";
  //  let newCustomer=document.createElement("li");
  // newCustomer.innerHTML='<div class="ellipse"></div><div class="circle"></div><div class="cInfo"><a>'+cname+'</a><a>'+total+'</a></div>';
  //  document.querySelector('.list').appendChild(newCustomer);
  // count=count+1
}

function search() {
  let sea = document.getElementById("search");
  if (sea.style.display == "block") {
    sea.style.display = "none";
  } else {
    sea.style.display = "block";
  }
}

//this is for removing customer.
function removeCustomer() {
  let removeCustomer = document.querySelector("section li");
  removeCustomer.remove();
  count = count - 1;
}

// this functions is for resizing the customer scroll option.
// function resize() {
//   let list = document.getElementById("list");
//     let li = list.getElementsByTagName("li");
//     if(li.length>=7){
//      if (document.querySelector(".list").scrollTop > 0 ) {
//        document.getElementById("navBar").style.height="0vh";
//        document.querySelector(".toolBar").style.top="18.19vh";
//        document.getElementById("fR").style.height="0vh";
//        document.getElementById("topHalf").style.height="18.vh";
//        document.getElementById("d-l").style.height = "10.71vh";
//        document.getElementById("d-r").style.height = "10.71vh";
//        document.getElementById("d-r").style.bottom = "2.12vh";
//        document.getElementById("d-l").style.bottom = "2.12vh";
//        document.querySelector(".list").style.top = "26.45vh";
//        document.querySelector(".list").style.height = "656vh";
//        document.getElementById("letter").style.height = "0vh";
//        document.getElementById("letter").style.top = "0vh";
//        document.getElementById("letter").style.border = "0vh";
//        document.getElementById("letter").style.fontSize = "0vh";
//        document.getElementById("identity").style.height = "0vh";
//        document.getElementById("identity").style.top = "0vh";
//        document.getElementById("i-s").style.fontSize = "0vh";
//        document.getElementById("i-n").style.fontSize = "0vh";
//        document.getElementById("i-s").style.top = "0vh";
//        document.getElementById("i-n").style.top = "0vh";
//        document.getElementById("next").style.fontSize = "0vh";
//        document.getElementById("next").style.top = "0vh";
//        document.getElementById("fR").style.fontSize = "0vh";
//        document.getElementById("fR").style.top = "0vh";
//        document.getElementById("i-o").style.fontSize = "0vh";
//        document.getElementById("a").style.top = "2.12vh";
//        document.getElementById("aa").style.top = "2.12vh";
//       } else {
//         document.getElementById("navBar").style.height="12.5vh";
//         document.querySelector(".toolBar").style.top="41.74";
//         document.getElementById("fR").style.height="5.02vh";
//         document.getElementById("topHalf").style.height="42.29";
//         document.getElementById("d-l").style.height = "13.95";
//         document.getElementById("d-r").style.height = "14.95";
//         document.getElementById("d-r").style.bottom = "11.6vh";
//         document.getElementById("d-l").style.bottom = "11.5vh";
//         document.querySelector(".list").style.top = "50vh";
//         document.querySelector(".list").style.height = "50vh";
//         document.getElementById("letter").style.height = "5.58vh";
//         document.getElementById("letter").style.top = "4.24";
//         document.getElementById("letter").style.border = "0.66vh solid #FFFFFF";
//         document.getElementById("letter").style.fontSize = "4.01vh";
//         document.getElementById("identity").style.height = "3.34vh";
//         document.getElementById("identity").style.top = "6.25vh";
//         document.getElementById("i-s").style.fontSize = "2.8vh";
//         document.getElementById("i-n").style.fontSize = "2.8vh";
//         document.getElementById("i-s").style.top = "6.42vh";
//         document.getElementById("i-n").style.top = "6.42vh";
//         document.getElementById("next").style.fontSize = "2vh";
//         document.getElementById("next").style.top = "35.5vh";
//         document.getElementById("fR").style.fontSize = "2vh";
//         document.getElementById("fR").style.top = "34.15vh";
//         document.getElementById("a").style.top = "3.45%";
//        document.getElementById("aa").style.top = "3.45%";
//       }
//     }
// }
// }

function myFunction() {
  var input, filter, list, li, a, i, div;
  input = document.getElementById("sBar");
  filter = input.value.toUpperCase();
  list = document.getElementById("list");
  li = list.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
