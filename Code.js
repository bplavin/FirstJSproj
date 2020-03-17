"use strict";

const NOTE_BOX = "paragraphBox";

function createNote() {
  let para = document.createElement("DIV");
  para.className = NOTE_BOX;
  para.id = counter;
  para.innerHTML = document.getElementById('typeSomething').value;

  let btn = document.createElement("BUTTON");
  btn.innerHTML = 'X';
  btn.className = "closingBtn";
  btn.onclick = closeParaBox;

  para.appendChild(btn);
  document.getElementById("note-container").appendChild(para);
}

function removeNote() {

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
  var btn = event.target;
  const note = btn.parentNode;
  const mainContainer = note.parentNode;
  mainContainer.removeChild(note);
}

