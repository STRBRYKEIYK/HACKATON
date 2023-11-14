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

        // Start from index 1 to skip the header row
        for (var i = 1, counter = 1; i < rows.length; i++, counter++) {
            var row = tbody.insertRow(i - 1);
            var cells = rows[i].split(',');

            // Assuming the ID is in column 0, first name in column 1, and last name in column 2
            // Adjust the column indices based on your CSV structure
            var id = cells[0];
            var firstName = cells[1].split('"')[1];  // Extract first name from double quotes
            var lastName = cells[2].split('"')[0];   // Extract last name from double quotes

            // Combine first and last names
            var fullName = firstName + ' ' + lastName;

            // Add sequential number, ID, and name to the table
            var cellNumber = row.insertCell(0);
            cellNumber.innerHTML = counter + "";

            var cellId = row.insertCell(1);
            cellId.innerHTML = id;

            var cellName = row.insertCell(2);
            cellName.innerHTML = fullName;

            // Add the remaining columns
            for (var j = 3; j < cells.length; j++) {
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
