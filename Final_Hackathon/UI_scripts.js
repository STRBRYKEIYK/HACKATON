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
            
            // Pass the file to viewSpreadsheet function
            viewSpreadsheet(f);
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

function viewSpreadsheet(file) {
    // Make the modal visible
    document.getElementById('myModal').style.display = 'block';

    // Read the content of the CSV file
    var reader = new FileReader();
    reader.onload = function (e) {
        var csvContent = e.target.result;

        // Parse CSV content and populate the table
        var rows = csvContent.split('\n');
        var tbody = document.getElementById('tbody1');

        for (var i = 0; i < rows.length; i++) {
            var row = tbody.insertRow(i);
            var cells = rows[i].split(',');

            for (var j = 0; j < cells.length; j++) {
                var cell = row.insertCell(j);
                cell.innerHTML = cells[j];
            }
        }
    };

    reader.readAsText(file);
}

function closeSpreadsheetModal() {
    // Hide the modal
    document.getElementById('myModal').style.display = 'none';
}

function logout() {
    alert('Logging out...');
    // Logout then link to the Login Area
}
