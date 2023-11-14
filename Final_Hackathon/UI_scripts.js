// script.js

var student=[];
var stdno = 0;
var tbody = document.getElementById('tbody1');

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

    Papa.parse(document.getElementById('file_input').files[0],
    ({
        download: true,
          //ignore header
          header: true,
          //skip empty row
          skipEmptyLines: true,
          complete: function(results){
            //read every file then insert it to a array
            
            for (let i=0; i<results.data.length;i++){
                student.push(results.data[i]);
                //call the function and pass the data of array
                AddAllItemToTable(student);
            }
            
        }

    }));

    var input = document.getElementById('file_input');
    var files = input.files;

    handleFileSelect(files);

    setTimeout(function () {
        document.getElementById('upload_status-bar');
        setTimeout(function () {
            document.getElementById('upload_status').style.display = 'none';
            document.getElementById('upload_status-bar');
        }, 3000);
    }, 1000);
}

function viewSpreadsheet() {
    // Make the modal visible
    document.getElementById('myModal').style.display = 'block';
}

function closeSpreadsheetModal() {
    // Hide the modal
    document.getElementById('myModal').style.display = 'none';
}

function logout() {
    alert('Logging out...');
    // Logout then link to the Login Area
}

function AddItemToTable(STUDENT_NUM,STUDENT_NAME,ACADEMIC_YEAR,TRIMESTER,SECTION,DAY,TIME,COURSE_CODE,COURSE_DESCRIPTION,EMAIL,PRELIM_GRADE,MIDTERM_GRADE,
    FINAL_GRADE,REMARK,CREDIT_UNITS,FACULTY_NAME,ECR_NAME){
    //auto-create a row and column in table
    let trow = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('td');
    let td9 = document.createElement('td');
    let td10 = document.createElement('td');
    let td11 = document.createElement('td');
    let td12 = document.createElement('td');
    let td13 = document.createElement('td');
    let td14 = document.createElement('td');
    let td15 = document.createElement('td');
    let td16 = document.createElement('td');
    let td17 = document.createElement('td');
    let td18 = document.createElement('td');
  
  //assigning data to table that the readed after selecting file('CSV')
    td1.innerHTML = ++stdno;
    td2.innerHTML = STUDENT_NUM;
    td3.innerHTML = STUDENT_NAME;
    td4.innerHTML = ACADEMIC_YEAR;
    td5.innerHTML = TRIMESTER;
    td6.innerHTML = SECTION;
    td7.innerHTML = DAY;
    td8.innerHTML = TIME;
    td9.innerHTML = COURSE_CODE;
    td10.innerHTML = COURSE_DESCRIPTION;
    td11.innerHTML = EMAIL;
    td12.innerHTML = PRELIM_GRADE;
    td13.innerHTML = MIDTERM_GRADE;
    td14.innerHTML = FINAL_GRADE;
    td15.innerHTML = REMARK;
    td16.innerHTML = CREDIT_UNITS;
    td17.innerHTML = FACULTY_NAME;
    td18.innerHTML = ECR_NAME;
  
  //adding to row
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    trow.appendChild(td11);
    trow.appendChild(td12);
    trow.appendChild(td13);
    trow.appendChild(td14);
    trow.appendChild(td15);
    trow.appendChild(td16);
    trow.appendChild(td17);
    trow.appendChild(td18);
  //adding to the table
    tbody.appendChild(trow);
  
  }

  function AddAllItemToTable(TheStudent){
    stdno = 0;
    tbody.innerHTML="";
    TheStudent.forEach(element => {
      AddItemToTable(element.STUDENT_NUM,element.STUDENT_NAME,element.ACADEMIC_YEAR,element.TRIMESTER,element.SECTION,
        element.DAY,element.TIME,element.COURSE_CODE,element.COURSE_DESCRIPTION,element.EMAIL,element.PRELIM_GRADE,element.MIDTERM_GRADE,element.FINAL_GRADE,
        element.REMARK,element.CREDIT_UNITS,element.FACULTY_NAME,element.ECR_NAME);
    });
  }
