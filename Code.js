"use strict";
let data = [];
let usersData = [];
let arrOfId = [];

let currentPage = 1;
let numberPerPage = 20;


const NOTE_BOX = "paragraphBox";

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(commits => {
        for (let commit of commits) {
            data.push(commit);
            createNote(commit);
        }
        paginationButtons(commits);
        displayNotes(commits);
    });

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let user of users) {
            usersData.push(user);
            createUsersCheckBox(user);
        }
    });

function createUsersCheckBox(user) {
    let filterContainer = document.createElement('div');
    filterContainer.className = "filter";

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = user.id;
    checkbox.checked = true;

    let label = document.createElement('label');
    label.innerText = user.name;

    filterContainer.appendChild(checkbox);
    filterContainer.appendChild(label);
    document.getElementById('filters-section').appendChild(filterContainer);
}

function createNote(oneNote) {
    let paragraph = document.createElement("DIV");
    paragraph.className = NOTE_BOX;
    paragraph.innerText = oneNote.title + oneNote.userId;


    let btn = document.createElement("BUTTON");
    btn.innerHTML = 'X';
    btn.className = "closingBtn";
    btn.onclick = closeParaBox;

    paragraph.appendChild(btn);
    document.getElementById("note-container").appendChild(paragraph);
}

function filterNotes(filterElement) {
    let noteContainer = document.getElementById('note-container');
    let notes = document.getElementsByClassName(NOTE_BOX);
    let temp = [];

    for (let i = 0; i < notes.length; i++) {
        temp.push(notes[i]);
    }

    for (let i = 0; i < temp.length; i++) {
        noteContainer.removeChild(temp[i])
    }

    let value = filterElement.value;
    let selectedUseres = getUsersId();


    function getUsersId() {
        let checkData = [];
        for (let user of usersData) {
            let checkbox = document.getElementById(user.id + '');
            if (checkbox.checked == true) {
                checkData.push(user.id);
            }
        }
        return checkData;
    };


    for (let note of data) {
        if (value == "allNotes" && selectedUseres.includes(note.userId)) {
            createNote(note);
        } else if (value == "done_notes" && selectedUseres.includes(note.userId) && note.completed) {
            createNote(note);
        } else if (value == 'pending_notes' && selectedUseres.includes(note.userId) && !note.completed) {
            createNote(note);
        }
    };

};

function closeParaBox(event) {
    let btn = event.target;
    const note = btn.parentNode;
    const mainContainer = note.parentNode;
    mainContainer.removeChild(note);
};

function displayNotes(items) {
    let noteContainer = document.getElementById('note-container');
    let notes = document.getElementsByClassName(NOTE_BOX);
    let temp = [];

    for (let i = 0; i < notes.length; i++) {
        temp.push(notes[i]);
    }

    for (let i = 0; i < temp.length; i++) {
        noteContainer.removeChild(temp[i])
    }


    let begin = ((currentPage - 1) * numberPerPage);
    let end = begin + numberPerPage;
    let pageList = items.slice(begin, end);

    for (let i = 0; i < pageList.length; i++) {
        let item = pageList[i];
        createNote(item);
    }
};


function paginationButtons(list, items) {
    let buttons = document.getElementById('pagination-container');

    let page_count = Math.ceil(list.length / numberPerPage);
    for (let i = 1; i < page_count + 1; i++) {
        let btn = createButtons(i, items);
        buttons.appendChild(btn);
    }
};

function createButtons(page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (currentPage == page) button.classList.add('active');

    button.addEventListener('click', function () {
        currentPage = page;
        displayNotes(items, numberPerPage, currentPage);

        let current_btn = document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
        });
        
    return button;
};
