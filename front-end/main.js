const fetchNotes = async () => {
    const response = await axios({
        url: "http://192.168.100.31:4300",
        method: "GET",
    });
    const notesList = response.data;

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
