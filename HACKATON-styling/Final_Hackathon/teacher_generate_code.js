//remove from project

/*

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

  //send verification via email
  var Email = { send: function (a) { return new Promise(function (n, e) 
    { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, 
    function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) 
    { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
    a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) 
    { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: 
    function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


  var studentid = document.getElementById('student_id');
  var generate_btn = document.getElementById('generate_btn');
  var course_code = document.getElementById('text');
  var teacher_id = localStorage.getItem('teacher_id');
  var teacher_name = localStorage.getItem('teacher_name');
  var email = "emmanuelablao16@gmail.com"

  function generate(){
    generatePasswExtension();
    saveData();
  }
  var passwExtension = generatePasswExtension();

  

        //function to generate random number and special character to password
        function generatePasswExtension() {
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialCharacters = '!#*_';
    
            //put all characters in one variable (except special character)
        const allCharacters = uppercaseLetters + lowercaseLetters + numbers;
        let passwordExt = '';
    
        // Include at least one uppercase letter, one number, and one special character
        passwordExt += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
        passwordExt += numbers[Math.floor(Math.random() * numbers.length)];
        passwordExt += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    
        // Complete the rest of the password with random characters
        for (let i = 1; i < 5; i++) {
            passwordExt += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }
        return passwordExt;
        }
      function saveData(){
            var ref = doc(db, "GENERATE_CODE", passwExtension);
                  setDoc(
                    ref, {
                        StudentID : studentid.value,
                        CourseCode : course_code.value,
                        TeacherName : teacher_name,
                        TeacherID : teacher_id
                        }
                    )
                    Email.send({
                        Host : "smtp.elasticemail.com",
                        Username : "guzmancarlo.123@gmail.com",
                        Password : "BC0676D842C915962D03B202E85BE57229E7",
                        To : email,
                        From : "guzmancarlo.123@gmail.com",
                        Subject : "Happy or Floor wax",
                        Body : "<h2>Hello"
                            + "<br> Thank you for Registering to our website, here's your account details:" 
                            + "<br> StudentID: " + studentid.value
                            + "<br> Password: " + passwExtension   
                        }).then(
                        alert('Please check your INBOX or SPAM in your Gmail')
                        );
    } 
generate_btn.addEventListener('click', generate);

*/
