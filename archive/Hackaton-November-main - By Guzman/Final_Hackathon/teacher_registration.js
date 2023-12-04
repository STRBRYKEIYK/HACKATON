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

  var teacher_id = document.getElementById('teacher_id');
  var first_name = document.getElementById('first_name');
  var middle_initial = document.getElementById('middle_initial');
  var last_name = document.getElementById('last_name');
  var pass = document.getElementById('password');
  var register_button = document.getElementById('register_button');

  function SaveRegistrationFrom(){
    var ref = doc(db, "TEACHER_LIST",teacher_id.value);
        setDoc( 
        ref, {
        TeacherID : teacher_id.value,
        TeacherName : first_name.value + " " + middle_initial.value +" "+ last_name.value,
        password : pass.value
        
    }
    
    )
    alert('SUCCESS');
    
    }

    register_button.addEventListener('click', SaveRegistrationFrom);




/*
let teacherID = document.getElementById('teacher-id').value
let fName = document.getElementById('first-name').value
let mI = document.getElementById('middle-initial').value
let lName = document.getElementById('last-name').value
let password = document.getElementById('password').value


try {
    await setDoc(doc(db, "TEACHER_LIST", teacherID), {
        teacherID : teacherID,
        name : fName + " " + mI +" "+ lName,
        password : password
    })
    alert('SUCCESS')
} catch (error) {
    console.error(error)
}
*/