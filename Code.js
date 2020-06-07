"use strict";

const NOTE_BOX = "paragraphBox";

function createNote() {
  let para = document.createElement("DIV");
  para.className = NOTE_BOX;

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
  for (let i = 0; i < notes.length; i++) {
    temp.push(notes[i]);
  }

  for (let i = 0; i < temp.length; i++) {
    elem.removeChild(temp[i]);
  }
}

function closeParaBox(event) {
  let btn = event.target;
  const note = btn.parentNode;
  const mainContainer = note.parentNode;
  mainContainer.removeChild(note);
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(commits => {
    let data = [];
    for (let x of commits) {
      console.log(data.push(x));
      console.log(createNote(data));
    }
  })
