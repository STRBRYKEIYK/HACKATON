var stdno = 0;
var tbody = document.getElementById('tbody1');

function AddItemToTable(STUDENT_NUM,STUDENT_NAME,ACADEMIC_YEAR,TRIMESTER,SECTION,DAY,TIME,COURSE_CODE,COURSE_DESCRIPTION,PRELIM_GRADE,MIDTERM_GRADE,
  FINAL_GRADE,REMARK,CREDIT_UNITS,FACULTY_NAME,ECR_NAME){
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
  td11.innerHTML = PRELIM_GRADE;
  td12.innerHTML = MIDTERM_GRADE;
  td13.innerHTML = FINAL_GRADE;
  td14.innerHTML = REMARK;
  td15.innerHTML = CREDIT_UNITS;
  td16.innerHTML = FACULTY_NAME;
  td17.innerHTML = ECR_NAME;

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

  tbody.appendChild(trow);

}

function AddAllItemToTable(TheStudent){
  stdno = 0;
  tbody.innerHTML="";
  TheStudent.forEach(element => {
    AddItemToTable(element.STUDENT_NUM,element.STUDENT_NAME,element.ACADEMIC_YEAR,element.TRIMESTER,element.SECTION,
      element.DAY,element.TIME,element.COURSE_CODE,element.COURSE_DESCRIPTION,element.PRELIM_GRADE,element.MIDTERM_GRADE,element.FINAL_GRADE,
      element.REMARK,element.CREDIT_UNITS,element.FACULTY_NAME,element.ECR_NAME);
  });
}

var student = [];

document.getElementById('view_csv').addEventListener('click', ()=>{
  Papa.parse(document.getElementById('UploadFile').files[0],
      {
          download: true,
          header: true,
          skipEmptyLines: true,
          complete: function(results){
            for (let i=0; i<results.data.length;i++){
              student.push(results.data[i]);
              console.log(student);
              AddAllItemToTable(student);
            
            }
          }
          

          });  
          
          });