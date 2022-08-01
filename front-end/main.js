const fetchNotes = () => {
    const notesList = [
        {
            notes: "This is a new note. Hello"
            author: "ABC"
        },
        {
            notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            author: "Lex"
        },
    ];

    const noteListTag = document.getElementById("view-note-list");
    
    for (let i = 0; 1< notesList.length; i++) {
        const tag = `
            <li class="view-note-block">
                <div>${notesList[i]}</div>
                <div class="view-note-author">${notesList[i].author}</div>
             </li>
            `;

        noteListTag.innerHTML += tag;  
    }
};

fetchNotes();
