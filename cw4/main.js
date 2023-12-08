function add_note() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const color = document.getElementById('color').value;
    const pin = document.getElementById('pin').checked;
    const date = new Date().toLocaleString();
    const tags = document.getElementById('tags').value.split(',').map(tag => tag.trim());

    const note = { title, content, color, pin, date, tags };
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    if (pin == true) {
        notes.unshift(note);
    }
    else {
        notes.push(note);
    }

    localStorage.setItem('notes', JSON.stringify(notes));

    show_notes();
    document.getElementById('create-note').reset();
}

function delete_note(index) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));

    show_notes();
}

function show_notes() {
    const notesContainer = document.getElementById('notes');
    notesContainer.innerHTML = '';

    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.style.backgroundColor = note.color;

        const closeButton = document.createElement('button');
        closeButton.classList.add('circle');
        closeButton.onclick = () => delete_note(index);

        const closeDiv = document.createElement('div');
        closeDiv.classList.add('note-title-div');
        closeDiv.appendChild(closeButton);

        const titleElement = document.createElement('h3');
        titleElement.classList.add('note-title-h3')
        titleElement.innerText = note.title;

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('note-title');
        titleDiv.appendChild(titleElement);
        titleDiv.appendChild(closeDiv);

        const tagsElement = document.createElement('p');
        tagsElement.innerText = `Tagi: ${note.tags}`;
        noteElement.appendChild(tagsElement);

        const contentElement = document.createElement('p');
        contentElement.innerText = note.content;

        const dateElement = document.createElement('p');
        dateElement.innerText = `Utworzono: ${note.date}`;

        noteElement.appendChild(titleDiv);
        noteElement.appendChild(contentElement);
        noteElement.appendChild(dateElement);

        notesContainer.appendChild(noteElement);
    });
}

function search_notes() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const notesContainer = document.getElementById('notes');
    notesContainer.innerHTML = '';

    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach((note, index) => {
        if (note.title.toLowerCase().includes(searchValue) ||
            note.content.toLowerCase().includes(searchValue) ||
            note.tags.some(tag => tag.toLowerCase().includes(searchValue))) {
                
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.style.backgroundColor = note.color;

            const closeButton = document.createElement('button');
            closeButton.classList.add('circle');
            closeButton.onclick = () => delete_note(index);

            const closeDiv = document.createElement('div');
            closeDiv.classList.add('note-title-div');
            closeDiv.appendChild(closeButton);

            const titleElement = document.createElement('h3');
            titleElement.classList.add('note-title-h3')
            titleElement.innerText = note.title;

            const titleDiv = document.createElement('div');
            titleDiv.classList.add('note-title')
            titleDiv.appendChild(titleElement);
            titleDiv.appendChild(closeDiv);
            
            const tagsElement = document.createElement('p');
            tagsElement.innerText = `${note.tags}`;
            noteElement.appendChild(tagsElement);

            const contentElement = document.createElement('p');
            contentElement.innerText = note.content;

            const dateElement = document.createElement('p');
            dateElement.innerText = `Utworzono: ${note.date}`;

            noteElement.appendChild(titleDiv);
            noteElement.appendChild(contentElement);
            noteElement.appendChild(dateElement);

            notesContainer.appendChild(noteElement);
        }
    });
}

show_notes();