const config = {
    apiKey: "AIzaSyAo_KIsYCI2Q_Gc1QYPEky9JQTZsQ0gv_4",
    authDomain: "sign-ups-bd8bc.firebaseapp.com",
    databaseURL: "https://sign-ups-bd8bc-default-rtdb.firebaseio.com",
    projectId: "sign-ups-bd8bc",
    storageBucket: "sign-ups-bd8bc.appspot.com",
    messagingSenderId: "993827906700",
    appId: "1:993827906700:web:0d7d48e7a1d9799a8b47a9",
    measurementId: "G-QRSVL6M4BR"
};
firebase.initializeApp(config);
  

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('newsletter-Form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');

  // Save message
  saveMessage(name,  email);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 4 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },4000);

  // Clear form
  document.getElementById('newsletter-Form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email
  });
}