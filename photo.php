<!DOCTYPE html>
<html lang="en">

<body>

  <head>
    <meta charset="UTF-8">
    <title>Documnet</title>
    <link rel='stylesheet' href='https://foliotek.github.io/Croppie/croppie.css'>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <?php
    echo '
    <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-storage.js"></script>'; ?>
    <style>
      body {
        font-family: 'Poppins';
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
      }

      #modal {
        float: left;
        z-index: 100;
        height: 100%;
        width: 100%;
        background: white;
        border: none;
        text-align: center;
      }

      /* .cr-boundary.rama {
  width: 100%;
  height: 100%;
} */
      button,
      .button {
        position: relative;
        background-color: #FFCB21;
        color: black;
        padding: 10px 0px;
        border-radius: 10px;
        border: none;
        font-size: 16px;
        font-weight: bold;
        display: block;
        cursor: pointer;
        margin: 0 auto;
        width: 200px;
        margin-bottom: 10px;
        text-transform: uppercase;
        outline: none;
      }

      button.actionCancel,
      .button.actionCancel {
        background-color: black;
        color: white;
        border: none;
      }

      button.actionDone,
      .button.actionDone {
        display: none;
      }

      button input[type="file"],
      .button input[type="file"] {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }

      #result-wrapper {
        float: right;
      }

      #result-wrapper img {
        border: 1px solid;
      }
    </style>

  </head>
  <div id="modal">
    <div id="main-cropper"></div>
    <a class="button actionUpload">
      <span>Upload</span>
      <input type="file" id="upload" value="Choose Image" accept="image/*">
    </a>
    <button id="showResult">Done</button>
    <button class="actionDone">Done</button>
    <button class="actionCancel" onclick="goback()">Cancel</button>
  </div>
  <div id="result-wrapper">

    <!-- <img src="" id="result" style=" width: 300px; height: 300px;"> -->
    <!-- <button id="showResult">show result</button> -->
  </div>
</body>

<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'></script>
<script src='https://foliotek.github.io/Croppie/croppie.js'></script>
<script>
  function goback() {
    var id = location.search.substring(0);
    var id1 = id.slice(1);
    window.location.href = 'transaction.html?' + id1;
  }
  var basic = $('#main-cropper').croppie({
    viewport: {
      width: 300,
      height: 300,
      type: 'circle'
    },
    boundary: {
      width: 300,
      height: 300
    },
    showZoomer: true,
    url: '',
    enableExif: true

  });

  function readFile(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $('#main-cropper').croppie('bind', {
          url: e.target.result
        });

      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  $('.actionUpload input').on('change', function() {
    readFile(this);
  });
  $('.actionDone').on('click', function() {
    $('.actionDone').toggle();
    $('.actionUpload').toggle();
  });
</script>

<?php

echo "
<script src='index.js'></script>";
?>

</html>