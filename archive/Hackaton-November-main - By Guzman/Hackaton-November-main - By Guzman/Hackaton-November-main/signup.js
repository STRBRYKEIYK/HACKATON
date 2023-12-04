import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
//import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDQ3f4wkzzqqZzSXTb4BcLAMAs8-JAYqJA",
authDomain: "icct-pmf-grade-viewer.firebaseapp.com",
projectId: "icct-pmf-grade-viewer",
storageBucket: "icct-pmf-grade-viewer.appspot.com",
messagingSenderId: "1098178333338",
appId: "1:1098178333338:web:3f6c8d3104db38f6316d23",
measurementId: "G-4SGCMCJHM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the button element by its ID
    const requestButton = document.getElementById('requestButton');

    // Add an event listener to the button
    requestButton.addEventListener('click', async () => {
        try {
            await setDoc(doc(db, "cities2", "LA2"), {
                name: "Los Angeles",
                state: "CA",
                country: "USA"
                })
            console.log('Button clicked!');
        } catch (error) {
            console.error('An error occurred:', error);
        }
    });
});


function signup() {
    //get all data from input fields
    studID = document.getElementById('student-id').value
    fName = document.getElementById('first-name').value
    mI = document.getElementById('middle-initial').value
    lName = document.getElementById('last-name').value
    campus = document.getElementById('select-campus').value
    email = document.getElementById('email').value
    section = document.getElementById('section').value
    password = document.getElementById('password').value

    //validate input fields if empty or not
    if (validate_fields(studID) == false || validate_fields(fName) == false || validate_fields(campus) == false) {
        alert('Some fields are empty')
        return
    } 

    //Authentication
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        var user = auth.currentUser

        //adding user to firestore database
        var database_ref = firestore.ref()

        var user_data = {
            studentID : studID,
            first_name : fName,
            middle_initial : mI,
            last_name : lName,
            campus : campus,
            email : email,
            section : section,
            password : password
        }

        database_ref.child('users/' + user.uid).set(user_data)

        alert('User Created')
    })
    .catch(function(error) {
        //firebase error handler
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })
}

function validate_fields(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}
    
