"use strict";
/* Do formatting of the code
  space between each function
  F1 -> format document
*/

const NOTE_BOX = "paragraphBox";

let counter = 0;

function createPara() {
  /* 1) it is note, not para 
      2) each button inside div should have onClick event which you can use to remove element from DOM
      https://stackoverflow.com/questions/19998711/how-to-pass-this-element-to-javascript-onclick-function-and-add-a-class-to-that
      https://stackoverflow.com/questions/8830839/javascript-dom-remove-element
  */

  counter ++;
  let para = document.createElement("DIV");
  para.className = NOTE_BOX;
  para.innerHTML = "Some note text";
  para.id = counter;

  let btn = document.createElement("BUTTON");
  btn.innerHTML = 'X';
  btn.className = "closingBtn";
  btn.onclick = closeParaBox;
  
  para.appendChild(btn);
  document.getElementById("note-container").appendChild(para);
}

function removePara() {
  /* here you remove parent for your notes
    when I press add add add -> then clear all -> then add it doesn't work
  */
  let elem = document.getElementById('note-container');
  let notes = document.getElementsByClassName(NOTE_BOX);
  let temp = [];
  for (var i = 0; i < notes.length; i++) {
      temp.push(notes[i]);
  }

  for (var i = 0; i < temp.length; i++) {
      elem.removeChild(temp[i]);
  }
}

function closeParaBox(event) {
  console.log(event);
  var btn = event.target;
  const note = btn.parentNode;
  const mainContainer = note.parentNode;
  mainContainer.removeChild(note);
}

function closeParaBox(event) {
  console.log(event);
  var btn = event.target;
  const note = btn.parentNode;
  const mainContainer = note.parentNode;
  mainContainer.removeChild(note);
}

