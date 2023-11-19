const tableHeadings = [];

// Handle file submission
const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];

    Papa.parse(selectedFile, {
        complete: function (results) {
            tableHeadings.push(results.data[0]);
            renderTable(tableHeadings);
        }
    });
});

// Handle modal toggle
const modal = document.getElementById('modal');
document.getElementById('btn-open-modal').addEventListener('click', () => modal.classList.add('active'));
document.getElementById('btn-close-modal').addEventListener('click', () => modal.classList.remove('active'));

// Handle table rendering
function renderTable(headingData) {
    const templateTable = document.getElementById('template-table');
    const templateTableContent = document.importNode(templateTable.content, true);
    const tableContainer = templateTableContent.querySelector('.table-container');
    const table = templateTableContent.querySelector('table');
    const thead = templateTableContent.querySelector('#thead');
    const tbody = templateTableContent.querySelector('#tbody');

    // Clear existing content
    thead.innerHTML = '';

    // Create table headers
    for (let i = 0; i < headingData.length; i++) {
        const th = document.createElement('th');
        th.textContent = headingData[i];
        thead.appendChild(th);
    }

    // Append the table to the modal
    modal.appendChild(tableContainer);
}

// Adjust 'main' padding dynamically
function adjustPaddingTop() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('main').style.paddingTop = `${headerHeight}px`;
    modal.style.top = `${headerHeight + 10}px`;
}
adjustPaddingTop();
window.addEventListener('resize', adjustPaddingTop);
