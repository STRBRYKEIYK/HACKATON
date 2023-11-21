
// Handle file submission
const fileInput = document.getElementById('input-file');
fileInput.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    const dropzoneBtn = document.querySelector('.input-label');
    let fileName = selectedFile.name;
    const maxCharacter = 16;
    if (fileName.length >= maxCharacter) {
        fileName = fileName.substring(0, maxCharacter) + "...";
    }
    dropzoneBtn.textContent = fileName;
    submitButton.disabled = false

    Papa.parse(selectedFile, {
        skipEmptyLines: true,
        complete: function (results) {
            displayTable(results.data)
        }
    });
});

const tableContainer = document.querySelector('.table-sub-container');
function displayTable(data) {
    // Create table
    const table = document.createElement('table');

    // Create header row
    const headerRow = table.insertRow(0);
    for (const header of data[0]) {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    }

    // Create data rows
    for (let i = 1; i < data.length; i++) {
        const rowData = data[i];
        const row = table.insertRow(i);

        for (const value of rowData) {
            const cell = row.insertCell();
            cell.textContent = value;
        }
    }

    clearTable();
    tableContainer.appendChild(table);
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
    fileInput.value = null;
    clearTable();

    // All functions for saving in database goes here...
    console.log("saved to database")
})
function clearTable() {
    tableContainer.innerHTML = '';
}
// Adjust 'main' padding dynamically
function adjustPaddingTop() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('main').style.paddingTop = `${headerHeight}px`;
}
adjustPaddingTop();
window.addEventListener('resize', adjustPaddingTop);
