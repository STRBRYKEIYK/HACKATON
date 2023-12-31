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
  var checksub;
  var fn;
  var fnid;
  var tri;

    var sub1_btn = document.getElementById('sub1_btn');

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

try{
function conditionStatement(){
if (sub1.value == ""){
    alert("Please Enter Verification First!");
}else if(sub2.value=="" && sub3.value=="" && sub4.value=="" && sub5.value=="" && sub6.value==""){
    sub1_verified();
    checksub=1;
}else if(sub3.value=="" && sub4.value=="" && sub5.value=="" && sub6.value==""){
    sub1_verified();
    sub2_verified();
    checksub=2;
}else if(sub4.value=="" && sub5.value=="" && sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    checksub=3;
}else if(sub5.value=="" && sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    sub4_verified();
    checksub=4;
}else if(sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    sub4_verified();
    sub5_verified();
    checksub=5;
}
else if(!sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    sub4_verified();
    sub5_verified();
    sub6_verified();
    checksub=6;
}
else{
    
}

}
 
async function sub1_verified(){
    var ref = doc(db, "GENERATE_CODE", sub1.value);
    const docsnap = await getDoc(ref);
    if(docsnap.exists()){
        var student_id = docsnap.data().StudentID;
        if(student_id == studID.value){
        cc1 = docsnap.data().CourseCode;
        tri = docsnap.data().sem;
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
        tri = docsnap.data().sem;
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
    if(studID.value=="" || fName.value=="" || lName.value=="" || password.value==""){
        alert("Please Finish the fill up first");
    }else if(checksub==1){
        var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
            setDoc( 
            ref, {
            studentID : studID.value,
            name : fName.value + " " + mI.value +" "+ lName.value,
            password : password.value,
            trimester : tri,
            subOne : cc1
        })
        alert('Registered Successful!');
        
    }else if(checksub==2){
        var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
            setDoc( 
            ref, {
            studentID : studID.value,
            name : fName.value + " " + mI.value +" "+ lName.value,
            password : password.value,
            trimester : tri,
            subOne : cc1,
            subTwo : cc2
        })
        alert('Registered Successful!');
    }else if(checksub==3){
        var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
            setDoc( 
            ref, {
            studentID : studID.value,
            name : fName.value + " " + mI.value +" "+ lName.value,
            password : password.value,
            trimester : tri,
            subOne : cc1,
            subTwo : cc2,
            subThree : cc3
        })
        alert('Registered Successful!');
    }else if(checksub==4){
        var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
            setDoc( 
            ref, {
            studentID : studID.value,
            name : fName.value + " " + mI.value +" "+ lName.value,
            password : password.value,
            trimester : tri,
            subOne : cc1,
            subTwo : cc2,
            subThree : cc3,
            subFour : cc4
        })
        alert('Registered Successful!');
    }else if(checksub==5){
        var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
            setDoc( 
            ref, {
            studentID : studID.value,
            name : fName.value + " " + mI.value +" "+ lName.value,
            password : password.value,
            trimester : tri,
            subOne : cc1,
            subTwo : cc2,
            subThree : cc3,
            subFour : cc4,
            subFive : cc5
        })
        alert('Registered Successful!');
    }else if(checksub==6){
        var ref = doc(db, "STUDENT_LIST","STUDENT_DATA",studID.value,tri);
            setDoc( 
            ref, {
            studentID : studID.value,
            name : fName.value + " " + mI.value +" "+ lName.value,
            password : password.value,
            trimester : tri,
            subOne : cc1,
            subTwo : cc2,
            subThree : cc3,
            subFour : cc4,
            subFive : cc5,
            subSix : cc6
        })
        alert('SUCCESS');
        
        }
    }
        sub1_btn.addEventListener('click',conditionStatement);
        register_button.addEventListener('click',SaveRegistrationFrom);
        }catch(Error){
        console.log(Error);
    }
