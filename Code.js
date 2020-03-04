"use strict";

function createPara() {
    var para = document.createElement("DIV");
    para.innerHTML = "Some note text";
    document.getElementById("myDIV").appendChild(para).classList.add('TextBox');
  }
  function removePara() {
    var elem = document.getElementById('myDIV');
    elem.parentNode.removeChild(elem);
   }