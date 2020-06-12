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
    });

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let user of users) {
            usersData.push(user);
            createUsersCheckBox(user);
        }
    });

function createUsersCheckBox(userName) {
    let filterContainer = document.createElement('div');
    filterContainer.className = "filter";

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let label = document.createElement('label');
    label.innerText = userName.name;

    filterContainer.appendChild(checkbox);
    filterContainer.appendChild(label);
    document.getElementById('filters-section').appendChild(filterContainer);
}

function createNote(oneNote) {
    let paragraph = document.createElement("DIV");
    paragraph.className = NOTE_BOX;
    paragraph.innerText = oneNote.title;

    let btn = document.createElement("BUTTON");
    btn.innerHTML = 'X';
    btn.className = "closingBtn";
    btn.onclick = closeParaBox;

    paragraph.appendChild(btn);
    document.getElementById("note-container").appendChild(paragraph);
}

function filterNotes(selectObject) {
    let noteContainer = document.getElementById('note-container');
    let notes = document.getElementsByClassName(NOTE_BOX);
    for (let i = 0; i < notes.length; i++) {
        noteContainer.removeChild(notes[i]);
    }

    let value = selectObject.value;

    for (let note of data) {
        if (value == "allNotes") {
            createNote(note);
        } else if (value == "done_notes" && note.completed) {
            createNote(note);
        } else if (value == 'pending_notes' && !note.completed) {
            createNote(note);
        }
    }
}

function closeParaBox(event) {
    let btn = event.target;
    const note = btn.parentNode;
    const mainContainer = note.parentNode;
    mainContainer.removeChild(note);
}