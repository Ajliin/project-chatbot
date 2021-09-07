// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const sendButton = document.getElementById('send-btn')
console.log(sendButton)
const nameInput = document.getElementById('name-input')
console.log(nameInput)

// Global variables, if you need any, declared here

// Functions declared here
const handleNameInput = () => {
  // event.preventDefault()
  const name = nameInput.value;
  console.log(name)
  showMessage(name, 'user')
  nameInput.value = '';

};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, Isn't it a flowery day today? What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
sendButton.addEventListener('click', (Event) => {
  event.preventDefault();

  console.log('eventlistener works')
  handleNameInput();


});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)