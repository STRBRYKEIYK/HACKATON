
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFWV4k9-XmABgNGmleyXLTcuEn41rMHK8",
    authDomain: "hackathon-26f12.firebaseapp.com",
    databaseURL: "https://hackathon-26f12-default-rtdb.firebaseio.com",
    projectId: "hackathon-26f12",
    storageBucket: "hackathon-26f12.appspot.com",
    messagingSenderId: "1071789540560",
    appId: "1:1071789540560:web:6227da20f3a3a3a9ab0ad5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import {
    getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField
  }
  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

  const db = getFirestore();
  let count = 0; 

  var stdnum, stdname , academic, trimester , section, day , time, cc , cd, prelim , midterm, finals
  , remark, cu,fn, en ;

    document.getElementById('uploadcofirm').addEventListener('click', ()=>{
    Papa.parse(document.getElementById('UploadFile').files[0],
        {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function(results){
                for (let i=0; i<results.data.length;i++){
                     stdnum = results.data[i].STUDENT_NUM;
                     stdname = results.data[i].STUDENT_NAME;
                     academic = results.data[i].ACADEMIC_YEAR;
                     trimester = results.data[i].TRIMESTER;
                     section = results.data[i].SECTION;
                     day = results.data[i].DAY;
                     time = results.data[i].TIME;
                     cc = results.data[i].COURSE_CODE;
                     cd = results.data[i].COURSE_DESCRIPTION;
                     prelim = results.data[i].PRELIM_GRADE;
                     midterm = results.data[i].MIDTERM_GRADE;
                     finals = results.data[i].FINAL_GRADE;
                     remark = results.data[i].REMARK;
                     cu = results.data[i].CREDIT_UNITS;
                     fn = results.data[i].FACULTY_NAME;
                     en = results.data[i].ECR_NAME;

    
                            var ref = doc(db, "CLASS_RECORD", section, stdnum, cc + stdnum);
                                setDoc(
                                ref, {
                                    STUDENT_NUM : stdnum,
                                    STUDENT_NAME : stdname,
                                    ACADEMIC_YEAR : academic,
                                    TRIMESTER : trimester,
                                    SECTION : section,
                                    DAY : day,
                                    TIME : time,
                                    COURSE_CODE : cc,
                                    COURSE_DESCRIPTION : cd,
                                    PRELIM : prelim,
                                    MIDTERM : midterm,
                                    FINALS : finals,
                                    REMARK : remark,
                                    CREDIT_UNITS : cu,
                                    FACULTY_NAME : fn,
                                    }
                                    
                                )
                                .then(()=>{
                                    if(count == i){
                                    alert("Added Succesfully");
                                }
                                else{
                                    count + 1;
                                    
                                }
                                })
                                .catch((error)=>{
                                    alert("Added failed:"+error);
                                });
                        
                    
            }                   
        }
    });
});
/*
                        function saveData(){
                        var ref = doc(db, "CLASS_RECORD", stdnum , cc+stdnum, cc);
                                setDoc(
                                ref, {
                                    STUDENT_NUM : stdnum,
                                    STUDENT_NAME : stdname,
                                    ACADEMIC_YEAR : academic,
                                    TRIMESTER : trimester,
                                    SECTION : section,
                                    DAY : day,
                                    TIME : time,
                                    COURSE_CODE : cc,
                                    COURSE_DESCRIPTION : cd,
                                    PRELIM : prelim,
                                    MIDTERM : midterm,
                                    FINALS : finals,
                                    REMARK : remark,
                                    CREDIT_UNITS : cu,
                                    FACULTY_NAME : fn,
                                    ECR_NAME : en
                                    }
                                )
                            }               
/*
    async function GetaDocument(){
        var ref = doc(db, texxt.value, search.value);
        const docsnap = await getDoc(ref);
    
        if(docsnap.exists()){
            stid.value = docsnap.data().STUDENTID;
            stname.value = docsnap.data().STUDENTNAME;
            stcode.value = docsnap.data().STUDENTCODE;
            stpr.value = docsnap.data().PRELIM;
            stmd.value = docsnap.data().MIDTERM;
            stfn.value = docsnap.data().FINALS;
            
        }
        else{
            alert("No Data");
        }
    }

Retrive.addEventListener("click", GetaDocument);

 /* var ref = doc(db, texxt.value, cc + stdnum, "SECOND_SUBJECT"  ,cc + stdnum, "THIRD_SUBJECT"  ,cc + stdnum, "FOURTH_SUBJECT"  ,cc + stdnum);

                var ref = doc(db, "CLASS_RECORD", texxt.value);
                setDoc(
                ref, {
                    STUDENT : student      
                        }
                    )
                    .then(()=>{
                        alert("Added Succesfully");
                    })
                    .catch((error)=>{
                        alert("Added Succesfully:"+error);
                    }); 



results.data.map((csv, )=>{
    student.push(csv);
})

  // Auto Generate ID
  async function AddDocuments(){
    var ref = collection(db, "TheStudentList");
    const docRef = await addDoc(
        ref, {
            NameofStudent : "Emman",
            StudentNumber : "20161589",
            Course: "BSIT"
        }
    )
    .then(()=>{
        alert("Added Succesfully");
    })
    .catch((error)=>{
        alert("Added Succesfully:"+error);
    });

  }

  //button function
  savebtn.addEventListener("click", AddDocuments);
  


async function GetaDocument(){
    var ref = doc(db, "CLASS_RECORD", texxt.value);
    const docsnap = await getDoc(ref);

    if(docsnap.exists()){
        retrive = docsnap.data().STUDENT;
        console.log(retrive);
        stname.value = retrive[search.value].studentname;
        stid.value = retrive[search.value].studentid;
        stcode.value = retrive[search.value].subcode;
        stpr.value = retrive[search.value]?.prelim;
        stmd.value = retrive[search.value]?.midterm;
        stfn.value = retrive[search.value]?.finals;
    }
    else{
        alert("No Data");
    }
} */