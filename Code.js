"use strict";

function createPara() {
    var para = document.createElement("DIV");
    para.innerHTML = "Some note text";
    var btn = document.createElement("BUTTON");
    btn.innerHTML = 'X';
    para.appendChild(btn);
    btn.className = "closingBtn";
    para.className = "paragraphBox";
    document.getElementById("1").appendChild(para);
  }
  function removePara() {
    var elem = document.getElementById('1');
    elem.parentNode.removeChild(elem);
   }
   function closeParaBox(btn){
    var close = document.getElementById('1');
    close.parentElement.removeChild(close);
   }
   