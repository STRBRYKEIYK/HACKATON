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

  var cc1;
  var cc2;
  var cc3;
  var cc4;
  var cc5;
  var cc6;
  var fn;
  var fnid;

  var sub1_btn = document.getElementById('sub1_btn');
  let sub2_btn = document.getElementById('sub2_btn');
  let sub3_btn = document.getElementById('sub3_btn');
  let sub4_btn = document.getElementById('sub4_btn');
  let sub5_btn = document.getElementById('sub5_btn');
  let sub6_btn = document.getElementById('sub6_btn');

    let studID = document.getElementById('student-id');
    let fName = document.getElementById('first-name');
    let mI = document.getElementById('middle-initial');
    let lName = document.getElementById('last-name');
    let email = document.getElementById('email');
    let section = document.getElementById('section');
    let password = document.getElementById('password');

    let sub1 = document.getElementById('sub1_verification');
    let sub2 = document.getElementById('sub2_verification');
    let sub3 = document.getElementById('sub3_verification');
    let sub4 = document.getElementById('sub4_verification');
    let sub5 = document.getElementById('sub5_verification');
    let sub6 = document.getElementById('sub6_verification');
    let register_button = document.getElementById('register_button');


 
async function sub1_verified(){
    var ref = doc(db, "GENERATE_CODE", sub1.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc1 = docsnap.data().CourseCode;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        sub1.value = cc1 + " - " + " Teacher name: " + fn + " Teacher Number: " + fnid;
    }
        
    else{
        alert("Please recheck your verfication email.");
      }
          
}
else{
    alert("Verification does not exist");
    }
}
async function sub2_verified(){
    var ref = doc(db, "GENERATE_CODE", sub2.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc2 = docsnap.data().CourseCode;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        sub2.value = cc2 + " - " + " Teacher name: " + fn + " Teacher Number: " + fnid;
    }
        
    else{
        alert("Please recheck your verfication email.");
      }
          
}
else{
    alert("Verification does not exist");
    }
}
async function sub3_verified(){
    var ref = doc(db, "GENERATE_CODE", sub3.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc3 = docsnap.data().CourseCode;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        sub3.value = cc3 + " - " + " Teacher name: " + fn + " Teacher Number: " + fnid;
    }
        
    else{
        alert("Please recheck your verfication email.");
      }
          
}
else{
    alert("Verification does not exist");
    }
}
async function sub4_verified(){
    var ref = doc(db, "GENERATE_CODE", sub4.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc4 = docsnap.data().CourseCode;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        sub4.value = cc4 + " - " + " Teacher name: " + fn + " Teacher Number: " + fnid;
    }
        
    else{
        alert("Please recheck your verfication email.");
      }
          
}
else{
    alert("Verification does not exist");
    }
}
async function sub5_verified(){
    var ref = doc(db, "GENERATE_CODE", sub5.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc5 = docsnap.data().CourseCode;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        sub5.value = cc5 + " - " + " Teacher name: " + fn + " Teacher Number: " + fnid;
    }
        
    else{
        alert("Please recheck your verfication email.");
      }
          
}
else{
    alert("Verification does not exist");
    }
}

async function sub6_verified(){
    var ref = doc(db, "GENERATE_CODE", sub6.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc6 = docsnap.data().CourseCode;
        fn = docsnap.data().TeacherName;
        fnid = docsnap.data().TeacherID;
        sub6.value = cc6 + " - " + " Teacher name: " + fn + " Teacher Number: " + fnid;
    }
        
    else{
        alert("Please recheck your verfication email.");
      }
          
}
else{
    alert("Verification does not exist");
    }
}
function SaveRegistrationFrom(){
        var ref = doc(db, "STUDENT_LIST",studID.value);
            setDoc( 
            ref, {
            studentID : studID.value,
            name : fName.value + " " + mI.value +" "+ lName.value,
            email : email.value,
            section : section.value,
            password : password.value,
            subOne : cc1,
            subTwo : cc2,
            subThree : cc3,
            subFour : cc4,
            subFive : cc5,
            subSix : cc6
        })
        alert('SUCCESS');
        
        }


sub1_btn.addEventListener('click',sub1_verified);
sub2_btn.addEventListener('click',sub2_verified);
sub3_btn.addEventListener('click',sub3_verified);
sub4_btn.addEventListener('click',sub4_verified);
sub5_btn.addEventListener('click',sub5_verified);
sub6_btn.addEventListener('click',sub6_verified);
register_button.addEventListener('click',SaveRegistrationFrom);




/*
register_button.addEventListener('click', async () => {

    let studID = document.getElementById('student-id').value
    let fName = document.getElementById('first-name').value
    let mI = document.getElementById('middle-initial').value
    let lName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let section = document.getElementById('section').value
    let password = document.getElementById('password').value

    let sub1 = document.getElementById('sub1').value
    let sub2 = document.getElementById('sub2').value
    let sub3 = document.getElementById('sub3').value
    let sub4 = document.getElementById('sub4').value
    let sub5 = document.getElementById('sub5').value
    let sub6 = document.getElementById('sub6').value

    try {
        await setDoc(doc(db, "STUDENT_LIST", studID), {
            studentID : studID,
            name : fName + " " + mI +" "+ lName,
            email : email,
            section : section,
            password : password,
            sub1 : sub1,
            sub2 : sub2,
            sub3 : sub3,
            sub4 : sub4,
            sub5 : sub5,
            sub6 : sub6
        })
        alert('SUCCESS')
    } catch (error) {
        console.error(error)
    }
});
*/