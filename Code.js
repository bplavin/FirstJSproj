"use strict";

let data = [];
let usersData = [];
const NOTE_BOX = "paragraphBox";

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(commits => {
        for (let commit of commits) {
            data.push(commit);
            createNote(commit);
        }
    })

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let user of users) {
            usersData.push(user);
            createUsersCheckBox(user);
        }
    })

function createUsersCheckBox(userName) {

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkBoxes';

    let label = document.createElement('span');
    label.appendChild(document.createTextNode(userName.name));
    label.className = 'labelCss';

    document.getElementById('checkBoxId').appendChild(checkbox);
    document.getElementById('checkBoxId').appendChild(label);
}

function createNote(oneNote) {
    let para = document.createElement("DIV");
    para.className = NOTE_BOX;
    para.innerText = oneNote.title;

    let btn = document.createElement("BUTTON");
    btn.innerHTML = 'X';
    btn.className = "closingBtn";
    btn.onclick = closeParaBox;

    para.appendChild(btn);
    document.getElementById("note-container").appendChild(para);
}

function filterNotes(selectObject) {

    let elem = document.getElementById('note-container');
    let notes = document.getElementsByClassName(NOTE_BOX);
    let temp = [];
    for (let i = 0; i < notes.length; i++) {
        temp.push(notes[i]);
    }

    for (let i = 0; i < temp.length; i++) {
        elem.removeChild(temp[i]);
    }

    let value = selectObject.value;

    if (value == "allNotes") {
        for (let i of data) {
            createNote(i);
        }
    }

    if (value == "done_notes") {
        for (let i of data) {
            if (i.completed == true) {
                createNote(i);
            }
        }
    }

    if (value == 'pending_notes') {
        for (let i of data) {
            if (i.completed == false) {
                createNote(i);
            }
        }
    }
}

function closeParaBox(event) {
    let btn = event.target;
    const note = btn.parentNode;
    const mainContainer = note.parentNode;
    mainContainer.removeChild(note);
}