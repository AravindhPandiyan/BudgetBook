// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDGsyzrJ7DuMIy_Hm9KPl8Mes42m__XWvg",
//   authDomain: "andpay-a1955.firebaseapp.com",
//   databaseURL: "https://andpay-a1955.firebaseio.com",
//   projectId: "andpay-a1955",
//   storageBucket: "andpay-a1955.appspot.com",
//   messagingSenderId: "909215409377",
//   appId: "1:909215409377:web:528eb63cdc8639780403a0"
// };

{
  var firebaseConfig = {
    apiKey: "AIzaSyDgUUIHD6UwZeCWBhTCKwRrQHFPJ52Hx50",
    authDomain: "test-43ec4.firebaseapp.com",
    databaseURL: "https://test-43ec4-default-rtdb.firebaseio.com",
    projectId: "test-43ec4",
    storageBucket: "test-43ec4.appspot.com",
    messagingSenderId: "565784590814",
    appId: "1:565784590814:web:50fdadecac959ef62fc54f",
    // measurementId: "G-P28CKTBFR5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //
  //
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  $("#btnLogin").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email != "" && password != "") {
      var result = firebase.auth().signInWithEmailAndPassword(email, password);
      result.catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        window.alert("Message : " + errorMessage);
      });

    }
    else {
      window.alert("please fill out all fields")

    }
  });
  $("#btnLogOut").click(function () {
    console.log("i am here");
    firebase.auth().signOut();
    window.location.href = "signIn.html";
  });
  $("#btnSignUp").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#confirmpassword").val();

    if (email != "" && password != "" && password != "") {
      if (password === cpassword) {
        var result = firebase.auth().createUserWithEmailAndPassword(email, password);
        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message : " + errorMessage);
        });
      }
      else {
        window.alert("password not matching");

      }

    }
    else {
      window.alert("please fill out all fields")

    }
  });
  function forget() {

    var auth = firebase.auth();
    var email = $("#email").val();


    if (email != "") {
      auth.sendPasswordResetEmail(email).then(function () {
        window.alert("email has been sent to you,Please check and verify.");
      })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message : " + errorMessage);
        });

    }
    else {
      window.alert("please fill the email field");

    }
  }
  function updatePassword() {

    var auth = firebase.auth();
    var email = $("#email").val();
    if (email != "") {
      auth.sendPasswordResetEmail(email).then(function () {
        window.alert("update password link has been sent to mail \n" + email);
      })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message : " + errorMessage);
        });
      let iOver = document.querySelector('.iOver');
      let iBut = document.querySelector('.iBut');
      let overlay = document.querySelector('.overlay');
      iOver.style.display = "none";
      iBut.style.display = "none";
      overlay.style.display = "none";
    }
  }
  $("#butDetails").click(function () {

    var bname = $("#bname").val();
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var address = $("#address").val();
    var number = $("#number").val();


    var downloadURL = "";
    var storageRef = firebase.storage().ref('userimages/' + bname);
    var image = $("#result").attr("src");
    if (image != "") {
      storageRef.putString(image, 'data_url').then(function (snapshot) {
        console.log('Uploaded a data_url string!');
        storageRef.getDownloadURL().then(function (url) {
          downloadURL = url;
          console.log(downloadURL);
        }).then(function () {


          var database = firebase.database().ref().child("users");
          var userID = firebase.auth().currentUser.uid;
          var usersRef = database.child(userID);
          if (bname != "" && fname != "" && lname != "" && address != "" && number != "") {
            var userData =
            {
              "bname": bname,
              "fname": fname,
              "lname": lname,
              "address": address,
              "number": phone,
              "profpic": downloadURL,
            };
            usersRef.set(userData, function (error) {
              if (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message : " + errorMessage);
              }
              else {
                window.location.href = "homePage.html";

              }

            });

          }
          else {
            window.alert("fill all the required details");
          }
        })
      })
    }
    else {
      var database = firebase.database().ref().child("users");
      var userID = firebase.auth().currentUser.uid;
      var usersRef = database.child(userID);
      if (bname != "" && fname != "" && lname != "" && address != "" && number != "") {
        var userData =
        {
          "bname": bname,
          "fname": fname,
          "lname": lname,
          "address": address,
          "number": phone,
        };
        usersRef.set(userData, function (error) {
          if (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage);
          }
          else {
            window.location.href = "homePage.html";

          }

        });

      }
      else {
        window.alert("fill all the required details");
      }
    }


  });
  $("#newCust").click(function () {

    var cname = $("#cname").val();
    var cnumber = $("#cnumber").val();

    var image = $("#result").attr("src");

    var database = firebase.database().ref().child("customers");
    var userID = firebase.auth().currentUser.uid;
    var downloadURL = "";
    if (image != "") {
      var storageRef = firebase.storage().ref('custimages/' + cname);
      storageRef.putString(image, 'data_url').then(function (snapshot) {
        console.log('Uploaded a data_url string!');
        storageRef.getDownloadURL().then(function (url) {
          downloadURL = url;
        }).then(function () {
          if (cname != "" && cnumber != "") {
            var customerData =
            {
              "usid": userID,
              "cname": cname,
              "cnumber": cnumber,
              "settlement": 0,
              "duedate": "",
              "dpurl": downloadURL,
            };
            database.push(customerData, function (error) {
              if (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message : " + errorMessage);
              }
              else {
                window.location.href = "homePage.html";

              }

            });
          }
          else {
            window.alert("fill all the required details");
          }
        })
      });
    }
    else {
      if (cname != "" && cnumber != "") {
        var customerData =
        {
          "usid": userID,
          "cname": cname,
          "cnumber": cnumber,
          "settlement": 0,
          "duedate": "",
        };
        database.push(customerData, function (error) {
          if (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage);
          }
          else {
            window.location.href = "homePage.html";

          }

        });
      }
      else {
        window.alert("fill all the required details");
      }
    }

  });
  function readCustomer() {
    var database = firebase.database();
    var ref2 = database.ref('users');
    ref2.on('value', function (data) {
      var userID = firebase.auth().currentUser.uid;
      var us = data.val();
      var bname = us[userID].bname;
      // var pic=us[userID].fpic;
      var f = bname.slice(0, 1);
      let s = document.getElementById("letter");
      s.innerHTML = f;
      let dn = document.getElementById("identity");
      dn.innerHTML = bname;
    }
      , errorData);
    var ref = database.ref('customers');
    ref.on('value', getdata, errorData);
  }
  function getdata(data) {
    var gsettlement = 0;
    var rsettlement = 0;

    var costomer = data.val();
    var key = Object.keys(costomer);
    var userID = firebase.auth().currentUser.uid;

    for (var i = 0; i < key.length; i++) {
      if (userID != key[i]) {
        var usid = costomer[key[i]].usid;
        if (userID == usid) {
          var cname = costomer[key[i]].cname;
          var total = costomer[key[i]].settlement;
          var date = costomer[key[i]].duedate;
          var pic = costomer[key[i]].dpurl;
          if (total < 0) {
            rsettlement = rsettlement + total;
          }
          else {
            gsettlement = gsettlement + total;
          }
          addC(cname, total, date, key[i], pic);

        }
        let rsettel = document.getElementById("aa");
        rsettel.innerHTML = "&#8377 " + (rsettlement * -1);
        let gsettle = document.getElementById('a');
        gsettle.innerHTML = "&#8377 " + gsettlement;
      }
    }

  }
  function errorData(err) {
    console.log(err);
  }

  function addC(cname, total, date, key, pic) {
    let newCustomer = document.createElement("li");
    newCustomer.setAttribute("id", key);
    newCustomer.onclick = function () { changePage(this.id) };
    console.log(date);
    if (date == "") {
      if (pic == undefined) {
        if (total < 0) {
          total = total * -1;
          newCustomer.innerHTML = '<div class="ellipse"></div><div class="circle"></div><div class="cInfo"><a>' + cname + '</a><a style="color:red;font-weight:bold;">&#8377 ' + total + '</a></div>';
        }
        else {
          newCustomer.innerHTML = '<div class="ellipse"></div><div class="circle"></div><div class="cInfo"><a>' + cname + '</a><a style="color:green;font-weight:bold;">&#8377 ' + total + '</a></div>';

        }
      }
      else {
        if (total < 0) {
          total = total * -1;
          newCustomer.innerHTML = '<div class="ellipse"><img src="' + pic + '" width="100%" height="100%"></div><div class="circle1"></div><div class="cInfo"><a>' + cname + '</a><a style="color:red;font-weight:bold;">&#8377 ' + total + '</a></div>';

        }
        else {
          newCustomer.innerHTML = '<div class="ellipse"><img src="' + pic + '" width="100%" height="100%"></div><div class="circle1"></div><div class="cInfo"><a>' + cname + '</a><a style="color:green;font-weight:bold;">&#8377 ' + total + '</a></div>';


        }
      }
    }

    else {

      if (pic == undefined) {
        if (total < 0) {
          total = total * -1;
          newCustomer.innerHTML = '<div class="ellipse"></div><div class="circle"></div><div class="cInfo"><a>' + cname + '</a><a style="color:red;font-weight:bold;">&#8377 ' + total + '</a></div>';
        }
        else {
          newCustomer.innerHTML = '<div class="ellipse"></div><div class="circle"></div><div class="cInfo"><a>' + cname + '</a><a style="color:green;font-weight:bold;">&#8377 ' + total + '</a></div>';
        }

      }
      else {
        if (total < 0) {
          total = total * -1;
          newCustomer.innerHTML = '<div class="ellipse"><img src="' + pic + '" width="100%" height="100%"></div><div class="circle1"></div><div class="cInfo"><a>' + cname + '</a><a>' + date + '</a><a style="color:red;font-weight:bold;">&#8377 ' + total + '</a></div>';


        }
        else {
          newCustomer.innerHTML = '<div class="ellipse"><img src="' + pic + '" width="100%" height="100%"></div><div class="circle1"></div><div class="cInfo"><a>' + cname + '</a><a>' + date + '</a><a style="color:green;font-weight:bold;">&#8377 ' + total + '</a></div>';

        }
      }
    }
    document.querySelector('.list').appendChild(newCustomer);
  }
  function changePage(ref) {
    window.location.href = "transaction.html?" + ref;

  }
  function traDetails() {

    var database = firebase.database();
    var ref = database.ref('customers');
    ref.on('value', getcustomer, errorData);
    var ref1 = database.ref('transactions');
    ref1.on('value', gettransaction, errorData);

  }
  function getcustomer(data) {
    var id = location.search.substring(0);
    var id1 = id.slice(1);
    var customer = data.val();
    var key = id1;
    var userID = firebase.auth().currentUser.uid;
    var usid = customer[key].usid;
    if (userID == usid) {
      var cname = customer[key].cname;
      var cnumber = customer[key].cnumber;
      var settlement = customer[key].settlement;
      var pic = customer[key].dpurl;
      if (pic != undefined) {
        let pho = document.querySelector(".circle");
        pho.innerHTML = '<img src="' + pic + '" width="100%" height="100%">'
      }
      let cinfo = document.querySelector(".container");
      if (settlement < 0) {
        settlement = settlement * -1;
        cinfo.innerHTML = '<div class="name">' + cname + '</div><div class="phone">' + cnumber + '</div><div class="youget">Due amount:<p style="color:red">&#8377; ' + settlement + '</p></div>'
      }
      else {
        cinfo.innerHTML = '<div class="name">' + cname + '</div><div class="phone">' + cnumber + '</div><div class="youget">Due amount:<p style="color:green">&#8377; ' + settlement + '</p></div>'
      }
    }
  }
  function sendW() {
    var database = firebase.database();
    var ref = database.ref('customers');
    ref.on('value', function (data) {
      var id = location.search.substring(0);
      var id1 = id.slice(1);
      var customer = data.val();
      var key = id1;
      var userID = firebase.auth().currentUser.uid;
      var usid = customer[key].usid;
      if (userID == usid) {
        var cname = customer[key].cname;
        var cnumber = customer[key].cnumber;
        var settlement = customer[key].settlement;
      }
      // var message="Payment Reminder from bname for "+cname+".\nPayment of rupees "+settlement+" is pending.We request you to clear the dues as soon as possible.-sent via &bills.com";
      if (cnumber != null) {
        if (settlement < 0) {
          settlement = settlement * -1;
        }
        window.location.href = 'https://api.whatsapp.com/send?phone=' + cnumber + '&text=%20' + encodeURIComponent("Payment Reminder for " + cname + ".\nPayment of rupees " + settlement + " is pending.We request you to clear the dues as soon as possible.\n-sent via &bills.com");
      }
    }, errorData);
  }
  function gettransaction(data) {
    var id = location.search.substring(0);
    var id1 = id.slice(1);
    var transactions = data.val();
    var key = Object.keys(transactions);
    var userID = firebase.auth().currentUser.uid;

    for (var i = key.length - 1; i >= 0; i--) {
      if (userID == transactions[key[i]].usid) {
        if (id1 == transactions[key[i]].cid) {
          var money = transactions[key[i]].money;
          var tdate = transactions[key[i]].tdate;
          var ttime = transactions[key[i]].ttime;
          let newTransaction = document.createElement("div");
          if (money > 0) {

            newTransaction.setAttribute("class", 'YouGot');
            newTransaction.innerHTML = '<div class="text">You Got<div class="inr" style="color:green;font-weight:bold;">&#8377;' + money + '</div></div><div class="DandT"><a>' + tdate + '<a><br><a>' + ttime + '</a></div><div class="hara"></div>';
            document.querySelector(".TD").appendChild(newTransaction);

          }
          else {
            money = money * -1;
            newTransaction.setAttribute("class", 'YouGave');
            newTransaction.innerHTML = '<div class="text">You Gave<div class="inr" style="color:red;font-weight:bold;">&#8377;' + money + '</div></div><div class="DandT"><a>' + tdate + '</a><br><a>' + ttime + '</a></div><div class="laal"></div>';
            document.querySelector(".TD").appendChild(newTransaction);

          }
        }
      }
    }

  }
  function read() {
    var database = firebase.database();
    var ref = database.ref('customers');

    ref.once('value', function (data) {
      var id = location.search.substring(0);
      var id1 = id.slice(1);
      var customer = data.val();
      var key = id1;
      var userID = firebase.auth().currentUser.uid;
      var usid = customer[key].usid;
      if (userID == usid) {
        var name = customer[key].cname;
      }
      console.log(name);
      let newname = document.querySelector(".name");
      newname.innerHTML = '' + name + '';
    }, errorData);

    function errorData(err) {
      console.log(err);
    }
  }

  $("#yougave").click(function () {
    // console.log("iam called");
    var id = location.search.substring(0);
    var idc = id.slice(1);
    var dat = $("#datepicker").val();
    console.log(dat);
    if (dat == "") {
      var today = new Date();
      var tdate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    }
    else {
      tdate = dat;

    }
    console.log(tdate);
    var money = $("#money").val();
    money = money * -1;
    var note = $("#note").val();
    var today1 = new Date();
    // var time = today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds();
    var time = today1.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
    var userID = firebase.auth().currentUser.uid;
    var data = firebase.database().ref().child("transactions");

    if (money != "") {
      var transactionData =
      {
        "usid": userID,
        "cid": idc,
        "money": money,
        "note": note,
        "tdate": tdate,
        "ttime": time,
      };
      data.push(transactionData, function (error) {
        if (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message : " + errorMessage);
        }
        else {
          var database = firebase.database();
          var ref = database.ref('customers');

          ref.once('value', function (data) {
            var id = location.search.substring(0);
            var id1 = id.slice(1);
            var customer = data.val();
            var key = id1;
            var userID = firebase.auth().currentUser.uid;
            var usid = customer[key].usid;
            if (userID == usid) {
              var settlement1 = customer[key].settlement;
            }
            var set1 = settlement1 + money;
            ref.child(key).update({ 'settlement': set1 });
            window.location.href = "transaction.html?" + key;
          }, errorData);


        }
      })
    }

  });
  $("#yougot").click(function () {
    console.log("iam called");
    var id = location.search.substring(0);
    var idc = id.slice(1);
    var dat = $("#datepicker").val();
    console.log(dat);
    if (dat == "") {
      var today1 = new Date();
      var tdate = today1.getDate() + '/' + (today1.getMonth() + 1) + '/' + today1.getFullYear();
    }
    else {
      tdate = dat;

    }
    var today = new Date()
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var time = today1.toLocaleString([], { hour: '2-digit', minute: '2-digit' });

    var money = $("#money").val();
    money = money * 1;
    var note = $("#note").val();
    var userID = firebase.auth().currentUser.uid;
    var data = firebase.database().ref().child("transactions");
    if (money != "") {
      var transactionData =
      {
        "usid": userID,
        "cid": idc,
        "money": money,
        "note": note,
        "tdate": tdate,
        "ttime": time,
      };
      data.push(transactionData, function (error) {
        if (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message : " + errorMessage);
        }
        else {
          var database = firebase.database();
          console.log("done");
          var ref = database.ref('customers');

          ref.once('value', function (data) {
            var id = location.search.substring(0);
            var id1 = id.slice(1);
            var customer = data.val();
            var key = id1;
            var userID = firebase.auth().currentUser.uid;
            var usid = customer[key].usid;
            if (userID == usid) {
              var settlement1 = customer[key].settlement;

            }
            var set1 = settlement1 + money;
            console.log(set1)
            ref.child(key).update({ 'settlement': set1 });
            window.location.href = "transaction.html?" + key;
          }, errorData);


        }
      })
    }

  });
  // function dateShow() {
  // var h = document.getElementById("deadline");
  // h.insertAdjacentHTML("beforeend", '<input type="text" id="date-picker" onchange="readdate()">');
  // var da=document.getElementById("date-picker");
  // da.onchange=readdate;

  // var deadline=$("#date-picker").val();
  // console.log("i am here");
  // if(deadline!=null)
  // {
  // console.log(deadline);
  // }
  // var id = location.search.substring(0);
  // var id1=id.slice(1,);
  // var database = firebase.database();
  // var ref=database.ref('customers');
  // ref.child(id1).update({'due date':deadline},{merge: true});
  // }
  function readdate() {
    var d = $("#datepicker").val();
    var deadline = new Date(d)
    var deadl = deadline.getDate() + '/' + (deadline.getMonth() + 1) + '/' + deadline.getFullYear();
    // let overlay = document.querySelector('.dOverlay');
    // overlay.style.display = "none";
    // var cal= document.getElementById("ui-datepicker-div");
    // cal.remove();
    if (deadline != null) {
      console.log(deadline);
      // var hRemove= document.getElementById("date-picker");
      // hRemove.remove();
      var id = location.search.substring(0);
      var id1 = id.slice(1);
      var database = firebase.database();
      var ref = database.ref('customers');
      ref.child(id1).update({ 'duedate': deadl });
      // cal.add();
    }
  }

  function fulldetails() {
    var cid = new Array();
    var dat = new Array();
    var money = new Array();
    var startdate = new Date($("#datepicker").val());
    var enddate = new Date($("#datepicker1").val());
    var data1 = firebase.database().ref().child("transactions");

    data1.on('value', function (data) {
      var tar = data.val();
      var userID = firebase.auth().currentUser.uid;
      var key = Object.keys(tar);
      for (var i = 0; i < key.length; i++) {
        if (userID == tar[key[i]].usid) {
          var date = new Date(tar[key[i]].tdate);
          if (date < enddate && date > startdate) {
            money.push(tar[key[i]].money);
            cid.push(tar[key[i]].cid);
            dat.push(tar[key[i]].tdate);

          }

        }
      }
      custName(cid, money, dat);

    }, errorData);


  }
  function custName(cid, money, dat) {
    var cName = new Array();
    var data2 = firebase.database().ref().child("customers");
    data2.on('value', function (data) {
      var cust = data.val();
      for (var i = 0; i < cid.length; i++) {
        var cust = data.val();
        console.log(cust[cid[i]].cname);
        cName.unshift(cust[cid[i]].cname);
      }
      fdisplay(money, cName, dat);

    }, errorData);


  }
  function fdisplay(money, cName, dat) {
    var ygive = 0;
    var ygot = 0;

    let nCopy = cName.slice()

    for (var i = 0; i < money.length; i++) {
      if (money[i] < 0) {

        mon = money[i] * -1;
        ygot = ygot + mon;
        let custReport = document.createElement("li");
        custReport.innerHTML = '<div class="ca"><div class="gr"></div><div class="txt">' + nCopy[i] + '</div><div class="txtM">&#8377 ' + mon + '</div><div class="txtN"></div><div class="calenderff">' + dat[i] + '</div></div>';
        document.querySelector('.entry').appendChild(custReport)
      }
      else {
        var date = dat[i].slice(0, 16);
        ygive = ygive + money[i];
        let custReport = document.createElement("li");
        custReport.innerHTML = '<div class="ca"><div class="gr"></div><div class="txt">' + cName[i] + '</div><div class="txtM"></div><div class="txtN">&#8377 ' + money[i] + '</div><div class="calenderff">' + date + '</div></div>';
        document.querySelector('.entry').appendChild(custReport)
      }
    }
    let ent = document.querySelector('.entries');
    ent.innerHTML = money.length + ' entries'
    let ygam = document.querySelector('.ygaM')
    ygam.innerHTML = '&#8377 ' + ygot
    let ygom = document.querySelector('.ygoM')
    ygom.innerHTML = '&#8377 ' + ygive
    let up = document.querySelector('.up')
    up.innerHTML = '&#8377 ' + ygot
    let doy = document.querySelector('.do')
    doy.innerHTML = '&#8377 ' + ygive
    var tot = ygive - ygot;
    if (tot > 0) {
      let ntp = document.querySelector(".ntp");
      ntp.innerHTML = '<a style="color:#4FC200;">&#8377 ' + tot + '</a>'
    }
    else {
      tot = tot * -1;
      let ntp = document.querySelector(".ntp");
      ntp.innerHTML = '<a style="color:  #FC0D1C;">&#8377 ' + tot + "</a>"
    }
  }

  function call() {
    var database = firebase.database();
    var ref = database.ref('customers');
    ref.on('value', function (data) {
      var id = location.search.substring(0);
      var id1 = id.slice(1);
      var customer = data.val();
      var key = id1;
      var userID = firebase.auth().currentUser.uid;
      var usid = customer[key].usid;
      if (userID == usid) {
        var cname = customer[key].cname;
        var cnumber = customer[key].cnumber;
        var settlement = customer[key].settlement;
      }
      if (cnumber != null) {
        window.location.href = "tel:" + cnumber;
      }
    }, errorData);
  }

  function message() {
    var database = firebase.database();
    var ref = database.ref('customers');
    ref.on('value', function (data) {
      var id = location.search.substring(0);
      var id1 = id.slice(1);
      var customer = data.val();
      var key = id1;
      var userID = firebase.auth().currentUser.uid;
      var usid = customer[key].usid;
      if (userID == usid) {
        var cname = customer[key].cname;
        var cnumber = customer[key].cnumber;
        var settlement = customer[key].settlement;
      }
      var message = "Payment Reminder from bname for " + cname + ".Payment of rupees " + settlement + " is pending.We request you to clear the dues as soon as possible.-sent via &bills.com";
      if (cnumber != null) {
        if (settlement < 0) {
          settlement = settlement * -1;
        }
        window.location.href = 'sms:' + cnumber + '?&body=' + "Payment Reminder for " + cname + ".\nPayment of rupees " + settlement + " is pending.We request you to clear the dues as soon as possible.\n-sent via &bills.com";
      }
    }, errorData);
  }
  $("#showResult").click(function () {

    $("#main-cropper")
      .croppie("result", {
        type: "canvas",
        size: "viewport",
        circle: true
      })
      .then(function (resp) {
        $("#result").attr("src", resp);
        console.log("i am called");
        var res = resp;
        addPhoto(res);
      })
  });

  function addPhoto(res) {
    var database = firebase.database();
    var ref = database.ref("customers");
    var userID = firebase.auth().currentUser.uid;
    var downloadURL = "";
    var id = location.search.substring(0);
    var id1 = id.slice(1);
    var image = res;
    var storageRef = firebase.storage().ref('custimages/' + id1);
    storageRef.putString(image, 'data_url').then(function (snapshot) {
      console.log('Uploaded a data_url string!');
      storageRef.getDownloadURL().then(function (url) {
        downloadURL = url;
      }).then(function () {
        ref.child(id1).update({ 'dpurl': downloadURL });
        window.location.href = "transaction.html?" + id1;
      });
    });
    f
    f
  }
}
