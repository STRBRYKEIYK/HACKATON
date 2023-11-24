// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDFWV4k9-XmABgNGmleyXLTcuEn41rMHK8",
//     authDomain: "hackathon-26f12.firebaseapp.com",
//     databaseURL: "https://hackathon-26f12-default-rtdb.firebaseio.com",
//     projectId: "hackathon-26f12",
//     storageBucket: "hackathon-26f12.appspot.com",
//     messagingSenderId: "1071789540560",
//     appId: "1:1071789540560:web:6227da20f3a3a3a9ab0ad5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import {
//     getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField
// }
//     from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// const db = getFirestore();

// //send verification via email
// var Email = {
//     send: function (a) {
//         return new Promise(function (n, e) {
//             a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t,
//                 function (e) { n(e) })
//         })
//     }, ajaxPost: function (e, n, t) {
//         var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
//             a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n)
//     }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest:
//         function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t }
// };

// var teacher_id = localStorage.getItem('teacher_id');
// var teacher_name = localStorage.getItem('teacher_name');

// let count = 0;

// var stdnum, stdname, academic, trimester, section, day, time, cc, cd, prelim, midterm, finals
//     , remark, cu, fn, en, email;


// document.getElementById('save_btn').addEventListener('click', () => {
//     try {
//         for (let i = 0; i < results.data.length; i++) {
//             stdnum = results.data[i].STUDENT_NUM;
//             stdname = results.data[i].STUDENT_NAME;
//             academic = results.data[i].ACADEMIC_YEAR;
//             trimester = results.data[i].TRIMESTER;
//             section = results.data[i].SECTION;
//             day = results.data[i].DAY;
//             time = results.data[i].TIME;
//             cc = results.data[i].COURSE_CODE;
//             cd = results.data[i].COURSE_DESCRIPTION;
//             prelim = results.data[i].PRELIM_GRADE;
//             midterm = results.data[i].MIDTERM_GRADE;
//             finals = results.data[i].FINAL_GRADE;
//             remark = results.data[i].REMARK;
//             cu = results.data[i].CREDIT_UNITS;
//             fn = results.data[i].FACULTY_NAME;
//             en = results.data[i].ECR_NAME;
//             email = results.data[i].EMAIL;


//             var ref = doc(db, "CLASS_RECORD", stdnum, cc + trimester, trimester);
//             setDoc(
//                 ref, {
//                 STUDENT_NUM: stdnum,
//                 STUDENT_NAME: stdname,
//                 ACADEMIC_YEAR: academic,
//                 EMAIL_ADDRESS: email,
//                 TRIMESTER: trimester,
//                 SECTION: section,
//                 DAY: day,
//                 TIME: time,
//                 COURSE_CODE: cc,
//                 COURSE_DESCRIPTION: cd,
//                 PRELIM: prelim,
//                 MIDTERM: midterm,
//                 FINALS: finals,
//                 REMARK: remark,
//                 CREDIT_UNITS: cu,
//                 FACULTY_NAME: fn,
//             }

//             )

//             if (midterm == "" && finals == "") { //runs if CSV has Prelim Grade only
//                 generateRandVerifCode();
//                 var verificationCode = generateRandVerifCode();

//                 //Generate_verification_code
//                 var ref = doc(db, "GENERATE_CODE", verificationCode);
//                 setDoc(
//                     ref, {
//                     StudentID: stdnum,
//                     CourseCode: cc,
//                     TeacherName: teacher_name,
//                     TeacherID: teacher_id,
//                     sem: trimester,
//                     StudentEmail: email
//                 }
//                 )

//                 //send verification email for student registration/re-register
//                 Email.send({
//                     Host: "smtp.elasticemail.com",
//                     Username: "guzmancarlo.123@gmail.com",
//                     Password: "BC0676D842C915962D03B202E85BE57229E7",
//                     To: email,
//                     From: "guzmancarlo.123@gmail.com",
//                     Subject: "Welcome to eCR-GradeCSync (eGCS) - Your Academic Hub!",
//                     Body: "<h2>Dear, " + stdname
//                         + "<br> <h2>Welcome</h2><p>to eCR-GradeCSync (eGCS) – Your Academic Hub for streamlined grading and transparent student evaluation at</p> ICCT COLLEGE!"
//                         + "<br> Thank you for choosing eCR-GradeCSync (eGCS) to enhance your academic experience. We are thrilled to have you on board."
//                         + "<br>"
//                         + "<br> Registration Details: "
//                         + "<br>"
//                         + "<br> Student ID: " + stdnum
//                         + "<br> Teacher Name: " + teacher_name
//                         + "<br> Course Enrolled: " + cc
//                         + "<br> Verfication Code " + verificationCode
//                         + "<br>"
//                         + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, you'll have quick access to your grades and valuable insights into your academic progress. "
//                         + "<br>"
//                         + "<br> Best regards,"
//                         + "<br>"
//                         + "<br> eCR-GradeCSync (eGCS) Team"
//                 })

//                 //then send email of Prelim Grade
//                 Email.send({
//                     Host: "smtp.elasticemail.com",
//                     Username: "guzmancarlo.123@gmail.com",
//                     Password: "BC0676D842C915962D03B202E85BE57229E7",
//                     To: email,
//                     From: "guzmancarlo.123@gmail.com",
//                     Subject: "Your " + cc + " Prelim Grade Has been uploaded",
//                     Body: "<h2>Dear, " + stdname
//                         + "</h2><br> Here is your Prelim Grade in " + cc + " from " + teacher_name
//                         + "<h3><br> Prelim Grade: " + prelim
//                         + "</h3><br>"
//                         + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, you'll have quick access to your grades and valuable insights into your academic progress. "
//                         + "<br>"
//                         + "<br> Best regards,"
//                         + "<br>"
//                         + "<br> eCR-GradeCSync (eGCS) Team"
//                 })
//                     .then(() => {


//                         //condition to make sure all data are inserted to table and emails are send
//                         if (count == i) {
//                             alert("Prelim Grades and Verification Uploaded Succesfully");
//                         }
//                         else {
//                             count + 1;
//                         }
//                     })

//             } else if (finals == "") {  // runs if uploaded CSV has the Midterm grade
//                 Email.send({
//                     Host: "smtp.elasticemail.com",
//                     Username: "guzmancarlo.123@gmail.com",
//                     Password: "BC0676D842C915962D03B202E85BE57229E7",
//                     To: email,
//                     From: "guzmancarlo.123@gmail.com",
//                     Subject: "Your " + cc + " Midterm Grade Has been uploaded",
//                     Body: "<h2>Dear, " + stdname
//                         + "</h2><br> Here is your Midterm Grade in " + cc + " from " + teacher_name
//                         + "<h3><br> Midterm Grade: " + midterm
//                         + "</h3><br>"
//                         + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, you'll have quick access to your grades and valuable insights into your academic progress. "
//                         + "<br>"
//                         + "<br> Best regards,"
//                         + "<br>"
//                         + "<br> eCR-GradeCSync (eGCS) Team"
//                 })
//                     .then(() => {
//                         //condition to make sure all data are inserted to table and emails are send
//                         if (count == i) {
//                             alert("Midterm Grades Uploaded Succesfully");
//                         }
//                         else {
//                             count + 1;
//                         }
//                     })


//             } else {  // runs if uploaded CSV has the Finals grade
//                 Email.send({
//                     Host: "smtp.elasticemail.com",
//                     Username: "guzmancarlo.123@gmail.com",
//                     Password: "BC0676D842C915962D03B202E85BE57229E7",
//                     To: email,
//                     From: "guzmancarlo.123@gmail.com",
//                     Subject: "Your " + cc + " Finals Grade Has been uploaded",
//                     Body: "<h2>Dear, " + stdname
//                         + "</h2><br> Here is your Finals Grade in " + cc + " from " + teacher_name
//                         + "<h3><br> Finals Grade: " + finals
//                         + "</h3><br>"
//                         + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, you'll have quick access to your grades and valuable insights into your academic progress. "
//                         + "<br>"
//                         + "<br> Best regards,"
//                         + "<br>"
//                         + "<br> eCR-GradeCSync (eGCS) Team"
//                 })
//                     .then(() => {
//                         //condition to make sure all data are inserted to table and emails are send
//                         if (count == i) {
//                             alert("Finals Grade Uploaded Succesfully");
//                         }
//                         else {
//                             count + 1;
//                         }
//                     })
//             }



//         }
//     } catch (error) {
//         alert("ADD FAILED: " + error)
//     }
// });


// document.getElementById('saveMidterm_btn').addEventListener('click', () => {

//     try {
//         for (let i = 0; i < results.data.length; i++) {
//             stdnum = results.data[i].STUDENT_NUM;
//             stdname = results.data[i].STUDENT_NAME;
//             academic = results.data[i].ACADEMIC_YEAR;
//             trimester = results.data[i].TRIMESTER;
//             section = results.data[i].SECTION;
//             day = results.data[i].DAY;
//             time = results.data[i].TIME;
//             cc = results.data[i].COURSE_CODE;
//             cd = results.data[i].COURSE_DESCRIPTION;
//             prelim = results.data[i].PRELIM_GRADE;
//             midterm = results.data[i].MIDTERM_GRADE;
//             finals = results.data[i].FINAL_GRADE;
//             remark = results.data[i].REMARK;
//             cu = results.data[i].CREDIT_UNITS;
//             fn = results.data[i].FACULTY_NAME;
//             en = results.data[i].ECR_NAME;
//             email = results.data[i].EMAIL;

//             Email.send({
//                 Host: "smtp.elasticemail.com",
//                 Username: "guzmancarlo.123@gmail.com",
//                 Password: "BC0676D842C915962D03B202E85BE57229E7",
//                 To: email,
//                 From: "guzmancarlo.123@gmail.com",
//                 Subject: "Your Midterm Grade Has been uploaded",
//                 Body: "<h2>Dear, " + stdname
//                     + "</h2><br> Here is your Miderm Grade in " + cc + " from " + teacher_name
//                     + "<h3><br> Miderm Grade: " + midterm
//                     + "</h3><br>"
//                     + "<br> Your journey with eCR-GradeCSync promises seamless grading, real-time updates, and enhanced transparency in your academic assessments. With our user-friendly platform, you'll have quick access to your grades and valuable insights into your academic progress. "
//                     + "<br>"
//                     + "<br> Best regards,"
//                     + "<br>"
//                     + "<br> eCR-GradeCSync (eGCS) Team"
//             })
//                 .then(() => {
//                     if (count == i) {
//                         alert("Added Prelim Succesfully");
//                     }
//                     else {
//                         count + 1;

//                     }
//                 })
//                 .catch((error) => {
//                     alert("Added failed:" + error);
//                 });

//         }
//     } catch (error) {
//         alert(error)
//     }


// });




// //function to generate random number and special character to password
// function generateRandVerifCode() {
//     const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     //const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
//     const numbers = '0123456789';
//     //const specialCharacters = '!#*_';

//     //put all characters in one variable (except special character)
//     const allCharacters = uppercaseLetters + numbers;
//     let randomVerifCode = '';

//     // Include at least one uppercase letter, one number, and one special character
//     randomVerifCode += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
//     randomVerifCode += numbers[Math.floor(Math.random() * numbers.length)];
//     //randomVerifCode += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

//     // Complete the rest of the password with random characters
//     for (let i = 1; i < 5; i++) {
//         randomVerifCode += allCharacters[Math.floor(Math.random() * allCharacters.length)];
//     }
//     return randomVerifCode;
// }


// function handleLogin(username) {
//     var welcomeMessage = "Welcome, " + username + "!";

//     // Set the welcome message in the HTML element
//     document.getElementById("welcomeMessage").innerHTML = "welcomeMessage";
// }
// //get user's name (teacher) from localStorage/database after login
// var loggedInUser = teacher_name;
// handleLogin(loggedInUser);