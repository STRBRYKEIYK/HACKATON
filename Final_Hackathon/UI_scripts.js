// script.js

function handleFileSelect(files) {
    for (var i = 0, f; f = files[i]; i++) {
        if (f.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
            f.type === 'application/vnd.ms-excel' ||
            f.type === 'text/csv') {
            document.getElementById('view_button').style.display = 'block';
            document.getElementById('upload_status').style.display = 'flex';
            document.getElementById('drop_zone').classList.add('uploaded');
            document.getElementById('drop_zone').innerHTML = 'File Uploaded!';
        } else {
            alert('Please upload a valid spreadsheet or CSV file.');
        }
    }
}

function handleDragOver(event) {
    event.preventDefault();
    document.getElementById('drop_zone').classList.add('hover');
}

function handleDragLeave() {
    document.getElementById('drop_zone').classList.remove('hover');
}

function handleMouseEnter() {
    document.getElementById('drop_zone').style.opacity = 1;
}

function handleMouseLeave() {
    document.getElementById('drop_zone').style.opacity = 0.8;
}

function handleFileDrop(event) {
    event.preventDefault();
    handleDragLeave();
    var files = event.dataTransfer.files;
    handleFileSelect(files);
}

function uploadFile() {
    var input = document.getElementById('file_input');
    var files = input.files;

    handleFileSelect(files);

    setTimeout(function () {
        document.getElementById('upload_status-bar').style.width = '100%';
        setTimeout(function () {
            document.getElementById('upload_status').style.display = 'none';
            document.getElementById('upload_status-bar').style.width = '0';
        }, 3000);
    }, 1000);
}

function viewSpreadsheet() {
    // Make the modal visible
    document.getElementById('myModal').style.display = 'block';

    // Example: Add some dummy data to the table
    var dummyData = [
        [1, 'ID001', 'John Doe', '2023', 'Trimester 1', 'Section A', 'Math', '85', '90', '92', 'Pass'],
        [2, 'ID002', 'Jane Doe', '2023', 'Trimester 1', 'Section B', 'English', '78', '85', '88', 'Pass'],
        // Add more rows as needed
    ];

    // Get the tbody element in the modal
    var tbody = document.getElementById('tbody1');

    // Clear existing data in the table
    tbody.innerHTML = '';

    // Populate the table with data
    for (var i = 0; i < dummyData.length; i++) {
        var row = tbody.insertRow(i);

        for (var j = 0; j < dummyData[i].length; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = dummyData[i][j];
        }
    }
}

function closeSpreadsheetModal() {
    // Hide the modal
    document.getElementById('myModal').style.display = 'none';
}

function logout() {
    alert('Logging out...');
    // Logout then link to the Login Area
}
