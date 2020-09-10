const form = document.querySelector('.form');
const inputName = document.getElementById('input-name');
const inputMail = document.getElementById('input-mail');
const inputMessage = document.getElementById('input-message');
const button = document.querySelector('.submit-button')
const regEx = /\S+@\S+\.\S+/;

const inputForm = () => {
  if (inputName.value.trim() !== "" && inputMessage.value !== "" && regEx.test(inputMail.value)) {
    button.style.backgroundColor = 'green';
    button.disabled = false;
  }
  else {
    button.style.backgroundColor = 'blue';
    button.disabled = true;
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log('Submitted');
});