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

  
  //getting the value from input box and button
  var uname = document.getElementById("student_id");
  var upass = document.getElementById("password");
  var logbtn = document.getElementById("studLogin_button");

  //checking if there is an error in the program
  try
  {

  //checking the the data from firestore
  async function GetaDocument(){
    var ref = doc(db, "STUDENT_LIST", uname.value);
    const docsnap = await getDoc(ref);
  //if the value is true then assign the collect data ('password') to a variable pass
    if(docsnap.exists()){
        var pass = docsnap.data().password;
  //if the value from the variable pass is equal to the value of upass that the user input/    
        if(pass == upass.value){
          //assigning data from firestore to variable
          var section = docsnap.data().section;
          var student_id = docsnap.data().studentID;
          var subject1 = docsnap.data().subOne;
          var subject2 = docsnap.data().subTwo;
          var subject3 = docsnap.data().subThree;
          var subject4 = docsnap.data().subFour;
          var subject5 = docsnap.data().subFive;
          var subject6 = docsnap.data().subSix;
          //make it global to be able to access in different js file.
          localStorage.setItem('section', section);
          localStorage.setItem('student_id', student_id);
          localStorage.setItem('sub1', subject1);
          localStorage.setItem('sub2', subject2);
          localStorage.setItem('sub3', subject3);
          localStorage.setItem('sub4', subject4);
          localStorage.setItem('sub5', subject5);
          localStorage.setItem('sub6', subject6);
          //opening the student_UI
         window.location="student_ui.html"
      
        }
        
        else{
            alert("Incorrect Password");
            upass.value="";
          }
              
    }
    else{
        alert("No account exist");
        uname.value="";
        upass.value="";
    }
}
  logbtn.addEventListener('click', GetaDocument);
}
//view the error in console
catch(Error){
  console.log(Error);
}

