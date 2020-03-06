"use strict";
/* Do formatting of the code
  space between each function
  F1 -> format document
*/

function createPara() {
  /* 1) it is note, not para 
      2) each button inside div should have onClick event which you can use to remove element from DOM
      https://stackoverflow.com/questions/19998711/how-to-pass-this-element-to-javascript-onclick-function-and-add-a-class-to-that
      https://stackoverflow.com/questions/8830839/javascript-dom-remove-element
  */
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
  /* here you remove parent for your notes
    when I press add add add -> then clear all -> then add it doesn't work
  */
  var elem = document.getElementById('1');
  elem.parentNode.removeChild(elem);
}

function closeParaBox(btn) {
  var close = document.getElementById('1');
  close.parentElement.removeChild(close);
}
