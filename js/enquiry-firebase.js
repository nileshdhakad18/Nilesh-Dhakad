// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAxKojHD_1cmrLfsstCdthPITwy6DfnVX8",
    authDomain: "nilesh-dhakad.firebaseapp.com",
    projectId: "nilesh-dhakad",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firestore database
  var db = firebase.firestore();
  
  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var projectType = document.querySelector('select[name="project type"]').value;
    var budget = document.querySelector('select[name="budget"]').value;
    var details = document.querySelector('textarea[name="details"]').value;
  
    // Add the form data to Firestore
    db.collection("enquiry")
      .add({
        name: name,
        email: email,
        projectType: projectType,
        budget: budget,
        details: details,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        // Reset the form after successful submission
        document.getElementById('form').reset();
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
  
  // Attach the submitForm function to the form's submit event
  document.querySelector('form').addEventListener('submit', submitForm);
  