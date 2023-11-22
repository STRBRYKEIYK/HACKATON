const submitBtn = document.getElementById('submit-button');
const clearBtn = document.getElementById('clear-button');
const fileNameEl = document.getElementById('file-name');
const dropzone = document.querySelector('.input-file-container');
const logoutBtn = document.getElementById('btn-logout');

// Handle file submission
const fileInput = document.getElementById('input-file');
fileInput.addEventListener('change', (event) => {
    // Parse CSV
    const selectedFile = event.target.files[0];
    Papa.parse(selectedFile, {
        skipEmptyLines: true,
        complete: results => displayTable(results.data)
    });

    // Truncate file name
    let fileName = selectedFile.name;
    let maxCharacter = 16;
    fileNameEl.textContent = fileName.length >= maxCharacter ? fileName.substring(0, maxCharacter) + "..." : fileName;

    // Remove dropzone
    dropzone.style.display = 'none';

    // Enabling the buttons
    submitBtn.removeAttribute('disabled');
    clearBtn.removeAttribute('disabled');
});

// Handle rendering table
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

// Handle Submit
submitBtn.addEventListener('click', () => {
    // fileNameEl.textContent = ''

    // All functions for saving in database goes here...
    alert("TEMPORARY: saved to database")
})

// Handle Clear
clearBtn.addEventListener('click', () => {
    fileInput.value = null;
    fileNameEl.textContent = ''
    clearTable();

    submitBtn.disabled = true;
    clearBtn.disabled = true;

    dropzone.style.display = ''
})

// Handle clear table
function clearTable() {
    const tableContainer = document.querySelector('.table-sub-container');
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }
}

// Handle logout
logoutBtn.addEventListener('click', () => {
    alert('nalungkot')
})

// Adjust 'main' padding dynamically
function adjustPaddingTop() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('main').style.paddingTop = `${headerHeight}px`;
}
adjustPaddingTop();
window.addEventListener('resize', adjustPaddingTop);

// Handle highlight selected table rows 
let selectedRow = null;
document.querySelector('.table-sub-container').addEventListener('click', event => {
    if (event.target.tagName === 'TD') {
        const clickedRow = event.target.parentNode;
        if (clickedRow !== selectedRow) {
            if (selectedRow) {
                selectedRow.classList.remove('selected-row');
            }
            clickedRow.classList.add('selected-row');
            selectedRow = clickedRow;
        }
    }
});