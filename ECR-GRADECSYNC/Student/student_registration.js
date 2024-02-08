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


    
    var sub1_btn = document.getElementById('verify-button');

    let studID = document.getElementById('student-id');
    let fName = document.getElementById('first-name');
    let mI = document.getElementById('middle-initial');
    let lName = document.getElementById('last-name');
    let email = document.getElementById('email');
    let section = document.getElementById('section');
    let password = document.getElementById('password');

    var counter = document.getElementById('counter');
    var setcountval = 3;

    let sub1 = document.getElementById('sub_verification1');
    let sub2 = document.getElementById('sub_verification2');
    let sub3 = document.getElementById('sub_verification3');
    let sub4 = document.getElementById('sub_verification4');
    let sub5 = document.getElementById('sub_verification5');
    let sub6 = document.getElementById('sub_verification6');

    let verif1 = document.getElementById('verified1');
    let verif2 = document.getElementById('verified2');
    let verif3 = document.getElementById('verified3');
    let verif4 = document.getElementById('verified4');
    let verif5 = document.getElementById('verified5');
    let verif6 = document.getElementById('verified6');

    let register_button = document.getElementById('register_button');

document.getElementById('test_button').addEventListener('click', ()=>{
    try {
        var ref = doc(db, "STUDENT_LIST", "STUDENT_DATA", '1uacarlo', '1st');

        // Create an object to store data
        var data = {
            studentID: '1uacarlo',
            name: "carlodave",
            password: '1234',
            trimester: '1st',
        };

        // Loop to add subject fields to data object
        for (var i = 1; i <= setcountval; i++) {
            // Assuming subject values are obtained from elements with IDs like 'subverif1', 'subverif2', etc.
            var subjectValue = document.getElementById('sub_verification'+ i).value;
            alert(subjectValue)
            if (subjectValue == '') {
                break
            } else {
                data['subject' + i] = subjectValue;
            }      
        }

        // Set the document in Firestore
        setDoc(ref, data)
           
    } catch (error) {
        alert(error)
    } 
});    

document.getElementById('reducesubj-button').addEventListener('click', ()=>{
    if (setcountval == 0) {
        alert("Minimum Number of Subject Reached")
    } else {
        setcountval = setcountval - 1;
        counter.value = setcountval;

        let spanId = 'subinput' + setcountval;
        let spanElement = document.getElementById(spanId);

            // hide the span
            spanElement.style.display = 'none';
    }
});

document.getElementById('ok-button').addEventListener('click', ()=>{
    if (setcountval >= 10) {
        alert("Max Number of Subject Reached")
    } else {
        for (var i = 1; i <= 10; i++) {
            var spanId = 'subinput' + i;
            var spanElement = document.getElementById(spanId);

                // Show the span
                spanElement.style.display = 'none';
        }
        

        for (var i = 1; i <= setcountval; i++) {
            var spanId = 'subinput' + i;
            var spanElement = document.getElementById(spanId);
                // Show the span
                spanElement.style.display = 'flex';
        }
    }    
})

document.getElementById('addsubj-button').addEventListener('click', ()=>{
    if (setcountval == 8) {
        alert("Max Number of Subject Reached")
    } else {
        setcountval = setcountval + 1;
        counter.value = setcountval;
        let spanId = 'subinput' + setcountval;
        let spanElement = document.getElementById(spanId);

            // hide the span
            spanElement.style.display = 'flex';
    }    
})

try{
function conditionStatement(){
if (sub1.value == ""){
    alert("Please Enter Verification First!");
    //make label blank just in case when verif code is cleared 
    verif1.value = ' --';
    verif2.value = ' --';
    verif3.value = ' --';
    verif4.value = ' --';
    verif5.value = ' --';
    verif6.value = ' --';
}else if(sub2.value=="" && sub3.value=="" && sub4.value=="" && sub5.value=="" && sub6.value==""){
    sub1_verified();
    checksub=1;
    //make label blank just in case when verif code is cleared 
    verif2.value = ' --';
    verif3.value = ' --';
    verif4.value = ' --';
    verif5.value = ' --';
    verif6.value = ' --';
}else if(sub3.value=="" && sub4.value=="" && sub5.value=="" && sub6.value==""){
    sub1_verified();
    sub2_verified();
    checksub=2;
    //make label blank just in case when verif code is cleared 
    verif3.value = ' --';
    verif4.value = ' --';
    verif5.value = ' --';
    verif6.value = ' --';
}else if(sub4.value=="" && sub5.value=="" && sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    checksub=3;
    //make label blank just in case when verif code is cleared 
    verif4.value = ' --';
    verif5.value = ' --';
    verif6.value = ' --';
}else if(sub5.value=="" && sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    sub4_verified();
    checksub=4;
    //make label blank just in case when verif code is cleared 
    verif5.value = ' --';
    verif6.value = ' --';
}else if(sub6.value==""){
    sub1_verified();
    sub2_verified();
    sub3_verified();
    sub4_verified();
    sub5_verified();
    checksub=5;
    //make label blank just in case when verif code is cleared 
    verif6.value = ' --';
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
        verif1.value = cc1 + " - " + fn;
    }
        
    else{
        verif1.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif1.value = "Verification does not exist";
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
        verif2.value = cc2 + " - " + fn;
    }
        
    else{
        verif2.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif2.value = "Verification does not exist";
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
        verif3.value = cc3 + " - " + fn;
    }
        
    else{
        verif3.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif3.value = "Verification does not exist";
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
        verif4.value = cc4 + " - " + fn;
    }
        
    else{
        verif4.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif4.value = "Verification does not exist";
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
        verif5.value = cc5 + " - " + fn;
    }
        
    else{
        verif5.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif5.value = "Verification does not exist";
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
        verif6.value = cc6 + " - " + fn;
    }
        
    else{
        verif6.value = "Please recheck your verfication email!"
      }
          
}
else{
    verif6.value = "Verification does not exist";
    }
}



function SaveRegistrationFrom(){
    try {
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
            studID.value="";
            fName.value="";
            mI.value="";
            lName.value="";
            password.value="";
            
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
            window.location.assign("http://e-class-record-cloud-sync-student.fast-page.org");
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
            studID.value="";
            fName.value="";
            mI.value="";
            lName.value="";
            password.value="";
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
            studID.value="";
            fName.value="";
            mI.value="";
            lName.value="";
            password.value="";
            
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
            alert('Registered Successful!');
            studID.value="";
            fName.value="";
            mI.value="";
            lName.value="";
            password.value="";
            
        }

        
    } catch (error) {
        alert(error)
    }
}
        sub1_btn.addEventListener('click',conditionStatement);

            //confirmation for register
        document.getElementById("register_button").addEventListener("click", function() {
            // Ask for confirmation
            var userConfirmation = confirm("Are you sure you want to finish registration? Take note you cannot change your password after registration");

            // Check the user's response
            if (userConfirmation) {
                SaveRegistrationFrom()

            } else {

            }
        });
        
        }catch(Error){
        console.log(Error);
    }

