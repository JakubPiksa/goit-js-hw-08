import throttle from 'lodash.throttle';

const formEl = document.querySelector(`.feedback-form`);
const emailInput = document.querySelector(`input[name="email"]`);
const messageInput = document.querySelector(`textarea[name="message"]`);

// zapisywanie formularza w local storage
const saveFormState = () => {
  const data = {
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.setItem(`feedback-form-state`, JSON.stringify(data));
};

// wczytywanie stanu formEl z local storage
const loadFormState = () => {
  const savedData = localStorage.getItem(`feedback-form-state`);
  if (savedData) {
    const data = JSON.parse(savedData);
    emailInput.value = data.email;
    messageInput.value = data.message;
  }
};

// czyszczenie local storage
const clearFormState = () => {
  const data = {
    email: emailInput.value,
    message: messageInput.value
  };

  console.log(`Form data:`, data);

  localStorage.removeItem(`feedback-form-state`);
  emailInput.value = ``;
  messageInput.value = ``;
};

// nasłuchiwanie, zapisywanie opóźnienie
formEl.addEventListener(`input`, throttle(saveFormState, 500));

// czyszczenie po submit
formEl.addEventListener(`submit`, (event) => {
  event.preventDefault();
  clearFormState();
});

// wczytywanie stany formularza z local storage 
window.addEventListener(`load`, loadFormState);