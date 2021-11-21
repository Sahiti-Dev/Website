/**********

  This Pen uses no libraries except fonts and should 
  work on all modern browsers
  
  The answers are stored in the `questions` array
  with the key `answer`. 
  
  inspired by XavierCoulombeM
  https://dribbble.com/shots/2510592-Simple-register-form
  
 **********/

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
  
  var messagesRef = firebase.database().ref('messages');

  
    
  var questions = [
    {question:"What's your first name?"},
    {question:"What's your email?", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/}
  ]
  
  /*
    do something after the questions have been answered
  */
  var onComplete = function() {
  
      var hello = document.createElement('h1')
      hello.appendChild(document.createTextNode('Thanks ' + questions[0].answer))
      setTimeout(function() {
        register.parentElement.appendChild(hello)
        setTimeout(function() { hello.style.opacity = 1 }, 50)
      }, 1000)
      var name = questions[0].answer;
      var email = questions[1].answer;

      saveMessage(name, email);  
      function saveMessage(name,email){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          name: name,
          email:email
        });
      }
  }
  
  ;(function(questions, onComplete) {
  
      var tTime = 100 // transition transform time from #register in ms
      var wTime = 200 // transition width time from #register in ms
      var eTime = 1000 // transition width time from inputLabel in ms
  
      // init
      // --------------
      if (questions.length == 0) return
  
      var position = 0
  
      putQuestion()
  
      forwardButton.addEventListener('click', validate)
      inputField.addEventListener('keyup', function(e) {
          transform(0, 0) // ie hack to redraw
          if (e.keyCode == 13) validate()
      })
  
      previousButton.addEventListener('click', function(e) {
          if (position === 0) return
          position -= 1
          hideCurrent(putQuestion)
      })
  
  
      // functions
      // --------------
  
      // load the next question
      function putQuestion() {
          inputLabel.innerHTML = questions[position].question
          inputField.type = questions[position].type || 'text'
          inputField.value = questions[position].answer || ''
         
  
          // set the progress of the background
          progress.style.width = position * 100 / questions.length + '%'
  
          previousButton.className = position ? 'ion-android-arrow-back' : 'ion-person'
  
          showCurrent()
  
      }
      
     
    

    
      // when submitting the current question
      function validate() {
  
          var validateCore = function() {      
            return inputField.value.match(questions[position].pattern || /.+/)
          }
  
          if (!questions[position].validate) questions[position].validate = validateCore
  
          // check if the pattern matches
          if (!questions[position].validate()) wrong(inputField.focus.bind(inputField))
          else ok(function() {
  
              // execute the custom end function or the default value set
              if (questions[position].done) questions[position].done()
              else questions[position].answer = inputField.value
  
              ++position
  
              // if there is a new question, hide current and load next
              if (questions[position]) hideCurrent(putQuestion)
              else hideCurrent(function() {
                  // remove the box if there is no next question
                  register.className = 'close'
                  progress.style.width = '100%'
  
                  onComplete()
                
              })
  
          })
  
      }
  
  
      // helper
      // --------------
  
      function hideCurrent(callback) {
          inputContainer.style.opacity = 0
          inputLabel.style.marginLeft = 0
          inputProgress.style.width = 0
          inputProgress.style.transition = 'none'
          inputContainer.style.border = null
          setTimeout(callback, wTime)
      }
  
      function showCurrent(callback) {
          inputContainer.style.opacity = 1
          inputProgress.style.transition = ''
          inputProgress.style.width = '100%'
          setTimeout(callback, wTime)
      }
  
      function transform(x, y) {
          register.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)'
      }
  
      function ok(callback) {
          register.className = ''
          setTimeout(transform, tTime * 0, 0, 10)
          setTimeout(transform, tTime * 1, 0, 0)
          setTimeout(callback, tTime * 2)
      }
  
      function wrong(callback) {
          register.className = 'wrong'
          for (var i = 0; i < 6; i++) // shaking motion
              setTimeout(transform, tTime * i, (i % 2 * 2 - 1) * 20, 0)
          setTimeout(transform, tTime * 6, 0, 0)
          setTimeout(callback, tTime * 7)
      }
  
  }(questions, onComplete))