// app.js

document.addEventListener('DOMContentLoaded', function() {
    const createNoteForm = document.getElementById('createNoteForm');

    // Event listener for form submission
    createNoteForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form values
        const noteTitle = document.getElementById('noteTitle').value;
        const noteContent = document.getElementById('noteContent').value;
        const noteTags = document.getElementById('noteTags').value;
        const noteBackgroundColor = document.getElementById('noteBackgroundColor').value;

        // Save the note
        const note = {
            title: noteTitle,
            content: noteContent,
            tags: noteTags.split(',').map(tag => tag.trim()), // Convert comma-separated tags to array
            backgroundColor: noteBackgroundColor
        };

        saveNoteToLocalStorage(note);

        // Clear form fields after saving
        createNoteForm.reset();
    });

    // Function to save the note to localStorage
    function saveNoteToLocalStorage(note) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }
});
