const config = {
    apiKey: "AIzaSyBc13FIMWlYG5hpxulPaBYc6aCRaFkXrAo",
    authDomain: "contactus-form-4169d.firebaseapp.com",
    projectId: "contactus-form-4169d",
    databaseURL: "https://contactus-form-4169d-default-rtdb.firebaseio.com",
    storageBucket: "contactus-form-4169d.appspot.com",
    messagingSenderId: "875553585582",
    appId: "1:875553585582:web:9c2e8159e02fb57e2db03f",
    measurementId: "G-6FQ9TZT607"
  };
  
    firebase.initializeApp(config);
    
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('contact_messages');
  
  // Listen for form submit
  document.getElementById('contactUs_Form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var mobile = getInputVal('mobile');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name,  email, mobile, subject, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 5 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },5000);
  
    // Clear form
    document.getElementById('contactUs_Form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, mobile, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      mobile: mobile,
      subject: subject,
      message: message
    });
  }